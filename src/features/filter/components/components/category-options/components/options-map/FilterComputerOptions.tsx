import { Stack } from '@mui/joy';

export default function FilterComputerOptions() {
    return (
        <Stack>
            {/* {options.map((option) => (
                <Stack key={`option${option.name}`}>
                    <Typography
                        onClick={() =>
                            setShowValues((prev) => ({ show: !prev.show }))
                        }
                    >
                        {option.name}
                    </Typography>
                    {showValues.show && showValues.option === option.name
                        ? option.values.map((value) => (
                              <Typography key={`option-value${value}`}>
                                  {value} <span>3</span>
                              </Typography>
                          ))
                        : ''}
                </Stack>
            ))} */}
        </Stack>
    );
}
