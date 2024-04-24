
import { FormControl, Input, Button, InputAdornment } from '@mui/material';

const InputText = ({placeholder,onChange,value,style, icon}) => {
  
    return (
        <>
            <FormControl variant="standard">
                <Input
                    placeholder={placeholder}
                    onChange={onChange}
                    value={value}
                    startAdornment={
                        <InputAdornment position="start" style={{ height: "100%" }}>
                            <Button
                                style={style}
                            >
                                {icon}
                            </Button>
                        </InputAdornment>
                    }
                />

            </FormControl>
        </>
    )
}

export default InputText