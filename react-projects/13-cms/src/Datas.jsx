const xAxisData = [
    { name: 'Jan', Sale: 112_000 },
    { name: 'Feb', Sale: 99_000 },
    { name: 'Mar', Sale: 12_090 },
    { name: 'Apr', Sale: 99_000 },
    { name: 'May', Sale: 54_000 },
    { name: 'Jun', Sale: 85_000 },
    { name: 'Jul', Sale: 34_000 },
    { name: 'Agu', Sale: 18_500 },
    { name: 'Sep', Sale: 0 },
    { name: 'Oct', Sale: 73_300 },
    { name: 'Nov', Sale: 12_000 },
    { name: 'Dec', Sale: 97_000 },
];

const newMembers = [
    {
        id: 1,
        username: 'Mohi',
        Title: 'Web Developer',
        img: '../public/images/hp.jpg',
    },
    {
        id: 2,
        username: 'Amin',
        Title: 'JS Developer',
        img: '../public/images/amin.jpg',
    },
    {
        id: 3,
        username: 'Amir',
        Title: 'React Developer',
        img: '../public/images/amir.jpg',
    },
    {
        id: 4,
        username: 'Ali',
        Title: 'CEO',
        img: '../public/images/ali.jpg',
    },
];

const transActions = [
    {
        id: 1,
        customer: 'Mohi',
        date: '11 january 2026',
        amout: '$123',
        status: 'Approved',
        img: '../public/images/hp.jpg',
    },
    {
        id: 2,
        customer: 'Mohammad',
        date: '2 May 2026',
        amout: '$99.8',
        status: 'Pending',
        img: '../public/images/mohammad.jpg',
    },
    {
        id: 3,
        customer: 'Ali',
        date: '4 Feb 2026',
        amout: '$250',
        status: 'Declined',
        img: '../public/images/ali.jpg',
    },
    {
        id: 4,
        customer: 'Amin',
        date: '26 Jun 2026',
        amout: '$74',
        status: 'Pending',
        img: '../public/images/amin.jpg',
    },
];

const userRow = [
    {
        id: 1,
        username: 'Mohaddese',
        avatar: '../public/11.png',
        status: 'avtive',
        transActions: '129.52',
        email: 'email@gmail.com',
    },
    {
        id: 2,
        username: 'Amir',
        avatar: '../public/11.png',
        status: 'non-active',
        transActions: '98',
        email: 'email@gmail.com',
    },
    {
        id: 3,
        username: 'Mohammad',
        avatar: '../public/11.png',
        status: 'avtive',
        transActions: '0',
        email: 'email@gmail.com',
    },
    {
        id: 4,
        username: 'Ali',
        avatar: '../public/11.png',
        status: 'avtive',
        transActions: '55.98',
        email: 'email@gmail.com',
    },
];

const products = [
    { id: 1, title: 'Hp', price: 890, img: '..public/images/hp.jpg' },
    { id: 2, title: 'Asus', price: 890, img: '..public/images/asus.jpeg' },
    { id: 3, title: 'Acer', price: 890, img: '..public/images/acer.jpg' },
    { id: 4, title: 'Dell', price: 890, img: '..public/images/dell.jpg' },
];

const productData = [
    {
        name: 'Jan',
        sales: 4000,
    },
    {
        name: 'Feb',
        sales: 3000,
    },
    {
        name: 'March',
        sales: 5000,
    },
];

export { newMembers, transActions, userRow, products, productData };
