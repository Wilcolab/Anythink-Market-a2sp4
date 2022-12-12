# frozen_string_literal: true

json.call(user, :id, :email, :username, :bio, :image, :isVerified)
json.token user.generate_jwt
