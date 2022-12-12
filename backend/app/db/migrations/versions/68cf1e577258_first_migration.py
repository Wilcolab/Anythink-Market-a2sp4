"""first migration

Revision ID: 68cf1e577258
Revises: fdf8821871d7
Create Date: 2022-12-12 23:20:56.168882

"""
from alembic import op
import sqlalchemy as sa


revision = '68cf1e577258'
down_revision = 'fdf8821871d7'
branch_labels = None
depends_on = None


def upgrade() -> None:
    op.execute("ALTER TABLE users ADD COLUMN isVerified BOOLEAN DEFAULT FALSE")


def downgrade() -> None:
    pass
