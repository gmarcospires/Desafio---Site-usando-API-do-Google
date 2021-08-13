
    
const theme = (props)=>{
    if(props.dark === true){
        
        return {
            colors:{
                primary: '#6200ee',
                background: '#4d4d4d',
                backgroundAlternative: '#0d0d0d',
                backgroundAlternative2: '#1a1a1a',
                text: '#ffffff',
                textAlternative: '#ffffff',
                success: '#135E01'
            },
            fonts: {
                regular: 'Georama, sans-serif',
            }

        }
    }else{
        return {
            colors:{
                primary: '#6200ee',
                background: '#00000014',
                backgroundAlternative: '#ffffff',
                backgroundAlternative2: '#ebebeb',
                text: '#000000B3',
                textAlternative: '#ffffff',
                success: '#135E01'
            },
            fonts: {
                regular: 'Georama, sans-serif',
            }
        }
    }
    
}


export default theme;