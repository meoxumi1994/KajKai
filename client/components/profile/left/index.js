import React from 'react'
import { Link } from 'react-router-dom'

const Left = ({ storeList, CREATE_STORE, onStoreClick}) => {
    return(
        <div>
            <Link to='/registerstore'>
                <div className="panel panel-default" style={{ marginTop: 7, padding: 5}}>
                    <div className="btn btn-default btn-xs">
                        {CREATE_STORE}
                    </div>
                </div>
            </Link>

            {storeList && storeList.map((value,index) => {
                return(
                    <Link key={index} to={'/' + value.id}>
                        <div className="btn btn-default btn-sm" onClick={() => onStoreClick(index)}>
                            {value.storename}
                        </div>
                    </Link>)
                })
            }

        </div>
    )
}

export default Left
