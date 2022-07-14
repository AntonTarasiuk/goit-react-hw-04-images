import { Rings } from 'react-loader-spinner'
import { LoaderWrapper } from './Loader.styled'

export const Loader = () => {
    return <LoaderWrapper>
        <Rings height={180} width={180} color="#3f51b5"/>
    </LoaderWrapper>
}