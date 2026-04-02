"""
Application settings loaded from environment variables via pydantic-settings.
"""

from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    app_name: str = "NyayBandhu API"
    app_version: str = "1.0.0"
    debug: bool = False
    cors_origins: str = "http://localhost:8080,http://localhost:5173"

    # RAG Configuration
    ollama_base_url: str = "http://localhost:11434"
    ollama_model: str = "llama3.2"
    embedding_model: str = "all-MiniLM-L6-v2"
    vector_store_path: str = "./vector_store"
    data_dir: str = "../datasets"
    chunk_size: int = 1000
    chunk_overlap: int = 200

    @property
    def cors_origins_list(self) -> list[str]:
        return [origin.strip() for origin in self.cors_origins.split(",")]

    class Config:
        env_file = ".env"
        env_file_encoding = "utf-8"


settings = Settings()
