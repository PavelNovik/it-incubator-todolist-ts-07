import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

type AddItemFormPropsType = {
    addItem: (title: string) => void
}

export function AddItemForm(props: AddItemFormPropsType) {

    let [title, setTitle] = useState("")
    let [error, setError] = useState<string | null>(null)

    const addItem = () => {
        if (title.trim() !== "") {
            props.addItem(title);
            setTitle("");
        } else {
            setError("Title is required");
        }
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null);
        if (e.charCode === 13) {
            addItem();
        }
    }

    const stylesButton = {
        maxWidth: '38px', maxHeight: '38px', minWidth: '38px', minHeight: '38px', color: 'white', backgroundColor: 'red', marginLeft: '5px'
    }

    return <div>
        <TextField label={error ? error : 'Title'} variant="outlined" color={'secondary'} value={title} size={'small'}
                   onChange={onChangeHandler}
                   onKeyPress={onKeyPressHandler} error={!!error}
                   // className={error ? "error" : ""}
        />
        <Button style={stylesButton} onClick={addItem}>+</Button>

        {/*{error && <div className="error-message">{error}</div>}*/}
    </div>
}
