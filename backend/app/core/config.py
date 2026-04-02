"""
Application settings loaded from environment variables via pydantic-settings.
"""

from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    app_name: str = "NyayBandhu API"
    app_version: str = "1.0.0"
    debug: bool = False
    cors_origins: str = "http://localhost:8080,http://localhost:5173"

    @property
    def cors_origins_list(self) -> list[str]:
        return [origin.strip() for origin in self.cors_origins.split(",")]

    class Config:
        env_file = ".env"
        env_file_encoding = "utf-8"


settings = Settings()
