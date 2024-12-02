import PcImage from 'src/assets/images/svg/category/1.svg';
import LaptopImage from 'src/assets/images/svg/category/2.svg';
import HardwareImage from 'src/assets/images/svg/category/3.svg';
import AccessoryImage from 'src/assets/images/svg/category/4.svg';
import TransistorImage from 'src/assets/images/svg/category/5.svg';
import ToolImage from 'src/assets/images/svg/category/6.svg';

const availableCategories = [
    {
        id: 'pc',
        title: 'Pc',
        image: PcImage,
        imageStyles: {
            top: { xs: '-1.5rem', md: '-2.2rem' },
            right: { xs: '-2.3rem', md: '-1.5rem' },
            transform: { xs: 'scale(1.1)', md: 'scale(1.4)' },
        },
        types: [
            {
                id: 'workstation',
                text: 'Workstation 🔨',
            },
            { id: 'desktop', text: 'Desktop 🖥️' },
            { id: 'gaming', text: 'Gaming 🎮' },
            { id: 'office', text: 'Office 👔' },
        ],
    },
    {
        id: 'laptop',
        title: 'Laptops',
        image: LaptopImage,
        imageStyles: {
            top: { xs: '-2rem', md: '-0.1rem' },
            right: { xs: '-1.1rem', md: 0 },
            transform: { xs: 'scale(1.9)', md: 'scale(1.6)' },
        },
        types: [
            {
                id: 'workstation',
                text: 'Workstation 🔨',
            },
            { id: 'desktop', text: 'Desktop 🖥️' },
            { id: 'gaming', text: 'Gaming 🎮' },
            { id: 'office', text: 'Office 👔' },
        ],
    },
    {
        id: 'hardware',
        title: 'Hardware',
        image: HardwareImage,
        imageStyles: {
            top: { xs: '-2.5rem', md: '-1rem' },
            right: '-2.5rem',
            transform: { xs: 'scale(1.45)', md: 'scale(1.5)' },
        },
        types: [
            { id: 'ram', text: 'Ram 🐏' },
            { id: 'hdd', text: 'Hdd 📦' },
            { id: 'ssd', text: 'Ssd 💾' },
            { id: 'cpu', text: 'Cpu 🧠' },
            { id: 'dvd-rom', text: 'Dvd rom 💽' },
            { id: 'motherboard', text: 'Motherboard 🤖' },
            { id: 'psu', text: 'Psu ⚡' },
        ],
    },
    {
        id: 'accessory',
        title: 'Accessories',
        image: AccessoryImage,
        imageStyles: {
            top: '0.1rem',
            right: '-0.8rem',
            transform: 'scale(1.35)',
        },
        types: [
            { id: 'headphone', text: 'Headphone 🎧' },
            { id: 'lamp', text: 'Lamp 🛋️' },
            { id: 'usb-drive', text: 'Usb drive 🔐' },
            { id: 'cable', text: 'Cable 🔌' },
        ],
    },
    {
        id: 'electronic',
        title: 'Electronics',
        image: TransistorImage,
        imageStyles: {
            top: '-1.8rem',
            right: '-1.5rem',
            transform: 'rotate(180deg) scale(1.27)',
        },
        types: [
            { id: 'battery', text: 'Battery 🔋' },
            { id: 'transistor', text: 'Transistor 🧨' },
            { id: 'pins', text: 'Pins 📌' },
            { id: 'connectors', text: 'Connectors 🖇️' },
        ],
    },
    {
        id: 'tool',
        title: 'Tools',
        image: ToolImage,
        imageStyles: {
            top: '-1rem',
            right: '-1.8rem',
            transform: 'scale(1.2)',
        },
        types: [
            { id: 'meter', text: 'Meter 🔭' },
            { id: 'screwdriver', text: 'Screwdriver 🛠️' },
            { id: 'tool-set', text: 'ToolSet 🧰' },
            { id: 'injectors', text: 'Injectors 💉' },
        ],
    },
];

export default availableCategories;
export type availableCategory = (typeof availableCategories)[number];
