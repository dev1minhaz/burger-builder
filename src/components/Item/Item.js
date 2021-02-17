/**
 * Created by mehmetyurtar on 11/9/19.
 */
import React from 'react';

function Item(props) {
    return (
        <div className="BuildControl">
            <div className="Label">
                {props.name}
            </div>
            <div>
                {props.sayi}
            </div>
            {
                props.butonGoster ? <button className="Less" onClick={() => {
                    props.malzemeCikar(props);
                }}>Remove</button> : <button className="Less disabled">Remove</button>
            }
            <button className="more" onClick={() => {
                props.malzemeEkle(props);
            }}>Add</button>
        </div>
    );
}

export default Item;
