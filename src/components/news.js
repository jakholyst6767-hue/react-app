import './news.css';

export function News() {

    return (
        <div className="container">
            <input type="checkbox" id="like"/>
            <label for="like" class="btn like">👍 Like</label>

            <input type="checkbox" id="dislike"/>
            <label for="dislike" class="btn btn dislike">👎 Dislike</label>
        </div>
    );
}
