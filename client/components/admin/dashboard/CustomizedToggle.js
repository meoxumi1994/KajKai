import React from 'react'
import ToggleButton from 'react-toggle-button'

const CustomizedToggle = ({status, changePermission, type, id}) => {
    return (
        <div style={{float: 'right'}}>
            <p style={{marginRight: 10, width: 60, color: status? 'rgb(193, 31, 31)': 'rgb(19, 163, 41)'}}> { status? 'Deactivated': 'Activated' } </p>
            <ToggleButton
                containerStyle={{display:'inline-block', width: 50}}
                activeLabel={''}
                activeLabelStyle={{ fontSize: 11 }}
                inactiveLabel={''}
                inactiveLabelStyle={{ fontSize: 11 }}
                colors={{
                  active: {
                      base: 'rgb(175, 168, 168)',
                  },
                  activeThumb: {
                      base: 'rgb(193, 31, 31)',
                      hover: 'rgb(145, 14, 14)'
                  },
                  inactive: {
                      base: 'rgb(104, 104, 104)',
                  },
                  inactiveThumb: {
                      base: 'rgb(19, 163, 41)',
                      hover: 'rgb(13, 130, 30)'
                  },
                }}
                trackStyle={{borderRadius: 0, height: 5, width: 55, borderRadius: 20}}
                thumbStyle={{borderRadius: 50, width: 15, height: 15, borderRadius: 20}}
                thumbAnimateRange={[5, 35]}
                value={ status || false }
                onToggle={() => changePermission(type, id, !status)} />
        </div>
    )
}

export default CustomizedToggle
