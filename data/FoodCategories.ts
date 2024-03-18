
type FoodItem = {
    name: string;
    imageUrl: string;
};

type FoodCategory = {
    category: string;
    foods: FoodItem[];
};

const foodCategories: FoodCategory[] = [
    {
        category: 'Italian',
        foods: [
            { name: 'Pizza', imageUrl: 'https://tse1.mm.bing.net/th?id=OIP.2dhr5Ln6cMHIu9SmwE_uBgHaE7&pid=Api&P=0&h=220' },
            { name: 'Cherry Tomato Pasta', imageUrl: 'https://assets.epicurious.com/photos/55f72d733c346243461d496e/1:1/w_2560%2Cc_limit/09112015_15minute_pastasauce_tomato.jpg' },
           { name: 'Lasagna', imageUrl: 'https://keviniscooking.com/wp-content/uploads/2020/05/Homemade-Italian-Lasagna-square.jpg' },
            { name: 'Risotto', imageUrl: 'https://blessthismeal.com/wp-content/uploads/2022/03/risotto1-1024x683.jpg' },
            { name: 'Tiramisu', imageUrl: 'https://www.rouses.com/wp-content/uploads/2018/03/Tiramisu-585178794.jpg' },
            { name: 'Carbonara', imageUrl: 'https://i.pinimg.com/originals/67/99/f6/6799f686a61e82cd7fa381831c1c5193.jpg' }
        ]
    },
    {
        category: 'Lebanese',
        foods: [
            { name: 'Hummus', imageUrl: 'https://tse3.mm.bing.net/th?id=OIP.3rVfLxFHmfkR_rNsePafBQHaE8&pid=Api&P=0&h=220' },
            { name: 'Falafel', imageUrl: 'https://www.seriouseats.com/thmb/bP2sWxzsKlCrdHFUWYv8nVf9IWs=/1500x1125/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__images__2016__03__20160323-falafel-recipe-23-8cd7408588bb4859943a1751437a1570.jpg' },
            { name: 'Tabbouleh', imageUrl: 'https://tse3.mm.bing.net/th?id=OIP.Jxs7dh4WotYis1KVStB92gHaE8&pid=Api&P=0&h=220' },
            { name: 'Chicken Shawarma', imageUrl: 'https://www.licious.in/blog/wp-content/uploads/2020/12/Chicken-Shawarma.jpg' },
            { name: 'Baklava', imageUrl: 'https://www.dishesorigins.com/wp-content/uploads/2020/05/Baklava-2-scaled.jpg' },
            { name: 'Kibbeh', imageUrl: 'https://www.munatycooking.com/wp-content/uploads/2022/04/kibbeh-feature-image.jpg' }
        ]
    },
    {
        category: 'Chinese',
        foods: [
            { name: 'Dumplings', imageUrl: 'https://cdn.fodors.com/wp-content/uploads/2017/09/Dumplings-Momos.jpg' },
            { name: 'Kung Pao Chicken', imageUrl: 'https://ketosisguide.us/wp-content/uploads/2024/03/image-179-526x712.webp' },
            { name: 'Spring Rolls', imageUrl: 'https://cdn.everesthimalayancuisine.com/what_is_in_spring_roll_tumblr_post_carrots_vagatables.jpg' },
            { name: 'Fried Rice', imageUrl: 'https://tse3.mm.bing.net/th?id=OIP.ug7mcOMWDCGNYWMVONgcgwHaE8&pid=Api&P=0&h=220' },
            { name: 'Hot Pot', imageUrl: 'https://www.touristsecrets.com/wp-content/uploads/2019/07/spicy-flavored-hot-pot.jpg' },
            { name: 'Mapo Tofu', imageUrl: 'https://www.maangchi.com/wp-content/uploads/2019/09/mapotofu.jpg' }
        ]
    },
    {
        category: 'Indian',
        foods: [
            { name: 'Butter Chicken', imageUrl: 'https://img-global.cpcdn.com/recipes/19ef360e3e4ccb65/751x532cq70/butter-chicken-recipe-main-photo.jpg' },
            { name: 'Biryani', imageUrl: 'https://cdn.shortpixel.ai/client/q_lossy,ret_img,w_1290/https://norecipes.com/wp-content/uploads/2017/05/chicken-biryani-12-1290x1934.jpg' },
            { name: 'Tandoori Chicken', imageUrl: 'https://foodiewish.com/wp-content/uploads/2020/05/Tandoori-Chicken-Recipe.jpg' },
            { name: 'Naan', imageUrl: 'https://live.staticflickr.com/4/3673/32622960044_c950fd87ac_b.jpg' },
            { name: 'Samosa', imageUrl: 'https://i0.wp.com/vegecravings.com/wp-content/uploads/2017/03/samosa-recipe-step-by-step-instructions.jpg?fit=1801%2C1717&quality=65&strip=all&ssl=1&is-pending-load=1' },
            { name: 'Rogan Josh', imageUrl: 'http://www.archanaskitchen.com/images/archanaskitchen/1-Author/Shaheen_Ali/Kashmiri_Rogan_Josh.jpg' }
        ]
    },
];

export default foodCategories;
