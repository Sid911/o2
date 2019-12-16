export const ADD_NEWS = 'ADD_NEWS'
export const FETCH_NEWS = 'FETCH_NEWS'
export const REQUEST_NEWS = "REQUEST_NEWS"



export function requestNews(PAGE) {
  return {
    type: REQUEST_NEWS,
    page: PAGE
  }
}

export function addNews(json, PAGE) {
  console.log(json, PAGE);

  return {
    type: ADD_NEWS,
    news: json.articles.map(child => child),
    receivedAt: Date.now(),
    page: PAGE
  }
}

function fetchNews(querry, page) {
  const st = "https://newsapi.org/v2/everything?q=" + querry + "&apiKey=0f241c7bc5ca4b0082f59f3d5b9a65eb"
  return dispatch => {
    dispatch(requestNews(page))
    fetch(st)
      .then(Response => Response.json())
      .then(json => dispatch(addNews(json, page)))
  }
}

function shouldFetchPosts(state, page) {
  var posts;
  var dir;
  switch (page) {
    case "home":
      posts = state.homeNews.items
      dir = state.homeNews
      break;
    case "agriculture":
      posts = state.agricultureNews.items
      dir = state.agricultureNews
    default:
      posts = state.agricultureNews.items
      dir = state.homeNews
  }
  if (!posts) {
    return true
  } else if (Math.floor((Date.now() - dir.lastUpdated) / (60000 * 30)) >= 1) {
    return true
  } else {
    return false
  }
}

export function fetchPostsIfNeeded(pagestring, querry) {
  return (dispatch, getState) => {
    if (shouldFetchPosts(getState(), pagestring)) {
      console.log("did something")
      return dispatch(fetchNews(querry, pagestring))
    } else {
      // Let the calling code know there's nothing to wait for.
      console.log("Wait for 15 min to get new content")
      return Promise.resolve()
    }
  }
}