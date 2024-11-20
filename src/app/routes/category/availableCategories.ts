import PlaceholderImage from 'src/assets/images/placeholder.png';

const availableCategories = [
    {
        id: 'pc',
        title: 'Pc',
        image: PlaceholderImage,
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
        image: PlaceholderImage,
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
        image: PlaceholderImage,
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
        image: PlaceholderImage,
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
        image: PlaceholderImage,
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
        image: PlaceholderImage,
        types: [
            { id: 'meter', text: 'Meter 🔭' },
            { id: 'screwdriver', text: 'Screwdriver 🛠️' },
            { id: 'tool-set', text: 'ToolSet 🧰' },
            { id: 'injectors', text: 'Injectors 💉' },
        ],
    },
];

export default availableCategories;
