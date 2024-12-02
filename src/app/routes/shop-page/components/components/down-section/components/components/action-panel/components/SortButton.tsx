import { Option, Select } from '@mui/joy';
import { GoSortAsc as SortIcon } from 'react-icons/go';

export default function SortButton() {
    return (
        <Select
            size='xs'
            defaultValue='default'
            endDecorator={<SortIcon />}
            slotProps={{
                indicator: {
                    style: {
                        display: 'none',
                    },
                },
            }}
            sx={{
                maxWidth: { sm: 'fit-content' },
                fontSize: { md: '0.563rem' },
            }}
        >
            <Option disabled value='default'>
                Sort
            </Option>
            <Option value='price-low-to-high'>Price low to high</Option>
            <Option value='price-hight-to-low'>Price high to low</Option>
            <Option value='sales'>Sales volume</Option>
            <Option value='recommended'>Recommended</Option>
        </Select>
    );
}
