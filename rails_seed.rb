do
	user_verified = User.create! email: "user_verified@test.com", password: '12345', username: "user_verified"
	item_verified = Item.create! title: "test item verified", description: 'verified seller item', user: user_verified, slug: `verified_seller_item`, isVerified: true
    user_not_verified = User.create! email: "user_not_verified@test.com", password: '12345', username: "user_not_verified"
    item_not_verified = Item.create! title: "test item not verified", description: 'not verified seller item', user: user_not_verified, slug: `not_verified_seller_item`, isVerified: false
end
