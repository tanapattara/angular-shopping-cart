export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
}

export const products = [
    {
        id: 1,
        name: 'iPhone 13 mini',
        price: 25900,
        description: 'จอภาพขนาด 5.4 นิ้ว'
    },
    {
        id: 2,
        name: 'iPhone 13',
        price: 29900,
        description: 'จอภาพขนาด 6.1 นิ้ว'
    },
    {
        id: 3,
        name: 'iPhone 13 Pro',
        price: 38900,
        description: 'จอภาพขนาด 6.1 นิ้ว'
    },
    {
        id: 4,
        name: 'iPhone 13 Pro MAX',
        price: 42900,
        description: ''
    }
];