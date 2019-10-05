import React, { useEffect, useState, useCallback, SyntheticEvent, FormEvent } from 'react'
import axios from 'axios';
import { Button } from '../Button/Button';
import { Spinner } from '../Spinner/Spinner';
import './list.scss';
import { Input } from '../Input/Input';

export const List: React.FC = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [text, setText] = useState<string>('');
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        setLoading(true);
        await axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
            setLoading(false);
            setData(res.data);
        });
    }

    const handleOnChange = (e: FormEvent<HTMLInputElement>): void => {
        setText(e.currentTarget.value)
    }
    return (
        <div>
            <Button text="Default Button" />
            <Button text="Danger Button" type="danger" />
            <Button text="Primary Button" type="primary" />
            <Button text="Sucess Button" type="success" />
            <Input type="text" value={text} name="text" placeholder="Custom Input" onChange={handleOnChange}/>
            {loading && <Spinner />}
            {data && (<h2>List of users</h2>)}
            {data && Array.isArray(data) && data.map((item, index) => (
                <div className="list-item" key={index}>{item['name']}</div>
            ))}
        </div>
    )
}
