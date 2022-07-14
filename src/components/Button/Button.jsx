import { LoadMoreButton } from "./Button.styled";

export const LoadMore = ({ onLoadMore }) => {
    return (
        <LoadMoreButton onClick={onLoadMore} type="button">
            Load more
        </LoadMoreButton>
    )
}
