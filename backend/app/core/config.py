"""Application settings loaded from environment variables via pydantic-settings."""

from pathlib import Path

from pydantic import field_validator
from pydantic_settings import BaseSettings, SettingsConfigDict

BACKEND_DIR = Path(__file__).resolve().parents[2]


class Settings(BaseSettings):
    model_config = SettingsConfigDict(
        env_file=str(BACKEND_DIR / ".env"),
        env_file_encoding="utf-8",
        extra="ignore",
    )

    app_name: str = "NyayBandhu API"
    app_version: str = "1.0.0"
    debug: bool = False
    cors_origins: str = "http://localhost:8080,http://localhost:5173"
    database_url: str = "postgresql+asyncpg://postgres:postgres@localhost:5432/nyaybandhu"

    ollama_base_url: str = "http://localhost:11434"
    ollama_model: str = "llama3.2"
    embedding_model: str = "all-MiniLM-L6-v2"
    vector_store_path: str = "./vector_store"
    data_dir: str = "./data"
    legacy_data_dir: str | None = "../datasets"
    upload_dir: str = "./data/uploads"
    auto_ingest_uploads: bool = False
    chunk_size: int = 1000
    chunk_overlap: int = 200

    @field_validator("debug", mode="before")
    @classmethod
    def parse_debug(cls, value):
        if isinstance(value, bool):
            return value
        if isinstance(value, str):
            normalized = value.strip().lower()
            if normalized in {"true", "1", "yes", "on", "debug"}:
                return True
            if normalized in {"false", "0", "no", "off", "release"}:
                return False
        return value

    @property
    def cors_origins_list(self) -> list[str]:
        return [origin.strip() for origin in self.cors_origins.split(",") if origin.strip()]

    def _resolve_path(self, raw_path: str | None) -> Path | None:
        if raw_path is None:
            return None

        path = Path(raw_path)
        if path.is_absolute():
            return path
        return (BACKEND_DIR / path).resolve()

    @property
    def vector_store_path_obj(self) -> Path:
        return self._resolve_path(self.vector_store_path) or BACKEND_DIR / "vector_store"

    @property
    def data_dir_path(self) -> Path:
        return self._resolve_path(self.data_dir) or BACKEND_DIR / "data"

    @property
    def legacy_data_dir_path(self) -> Path | None:
        return self._resolve_path(self.legacy_data_dir)

    @property
    def upload_dir_path(self) -> Path:
        return self._resolve_path(self.upload_dir) or BACKEND_DIR / "data" / "uploads"


settings = Settings()
