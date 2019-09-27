import React from 'react';

import { KEYPADS, OPERATORS } from '../../utils/constants';

const KeyboardComponent = ({ handleOnClick }) => {
    return (
        <div className="keyboard">
            {KEYPADS.map((rowKeys = [], idx) =>
                <div key={idx} className={`row-keys-${idx}`} >
                    {rowKeys.map((key, idx) =>
                        <button key={key} onClick={() => handleOnClick(key)} className={OPERATORS.includes(key) ? 'operator-btn' : ''}>{key}</button>
                    )}
                </div>
            )}
        </div>
    );
}

export default KeyboardComponent;
