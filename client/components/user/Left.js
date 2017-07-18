import React from 'react'

const Left = ({ storeList, STORE }) => {
    return(
        <div>
            {STORE}
            {storeList.map((item, index) =>
                <div key={index}>
                    <a href={"/"+item.urlname}>
                        <div className="btn"
                            style={{
                                textAlign: 'left',
                                display: 'inline-block',
                                margin: 0, padding: 4, backgroundColor: 'white', borderRadius: 2, width: 150 }}>
                            <img width={20} height={20} src={item.avatarUrl}/>
                            {" "}<span>{item.storename }</span>
                        </div>
                    </a>
                </div>

            )}
        </div>
    )
}

export default Left
