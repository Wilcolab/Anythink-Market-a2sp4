"""First migratin2

Revision ID: c92c379c35cc
Revises: fdf8821871d7
Create Date: 2022-12-13 00:48:12.160525

"""
from alembic import op
import sqlalchemy as sa


revision = 'c92c379c35cc'
down_revision = 'fdf8821871d7'
branch_labels = None
depends_on = None


def upgrade() -> None:
    op.execute('ALTER TABLE users ADD COLUMN is_verified BOOLEAN DEFAULT FALSE')


def downgrade() -> None:
    pass
