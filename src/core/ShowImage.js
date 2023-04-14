import React from 'react';
import {api} from '../api';

const ShowImage = ({item, url}) => (
    <div className='product-img'>
        <img className='mb-3' src={`${api}/api/${url}/photo/${item._id}`} alt={item.name} style={{maxHeight: '100%', maxWidth: '100%'}} />
    </div>
)

export default ShowImage;