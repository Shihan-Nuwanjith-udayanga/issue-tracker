import React, {PropsWithChildren,ReactNode} from 'react'
import {Text} from '@radix-ui/themes'

// interface Props{
//     children: ReactNode
// }

const ErrorMessage = ({children}: PropsWithChildren) => {
    if(!children) return null;
    return(
        // <div>ErrorMessage</div>
        <Text color="red" as="p">{children}</Text>
    )
}

export default ErrorMessage