const bookmarkName = document.getElementById('bookmark-name')
const bookmarkURL = document.getElementById('bookmark-url')
const bookmarkbtn = document.getElementById('bookmark-btn')
const bookmarkList = document.getElementById('bookmark-list')

document.addEventListener('DOMContentLoaded', loadBookmarks)


bookmarkbtn.addEventListener('click', function(){
    const name = bookmarkName.value.trim()
    const url = bookmarkURL.value.trim()

    if(!name || !url){
        alert('Please enter both name and url')
        return
    }
    else{
        if(!url.startsWith('http://') && !url.startsWith('https://'))
        {
            alert('Please enter a valid URL starting with http:// or https://')
            return
        }

        addBookmark(name,url)
        saveBookmark(name,url)

        bookmarkName.value = ""
        bookmarkURL.value = ""
    }
}) 
    
function addBookmark(name,url){
    const li = document.createElement('li')
    const link = document.createElement('a')
    link.href = url
    link.textContent = name
    link.target = '_blank'

   
     const removeButton = document.createElement('button')
    removeButton.textContent = 'Remove'
    
   

    removeButton.addEventListener('click',function(){
        bookmarkList.removeChild(li)
        removeBookmarkFromStorage(name,url)
    })
    li.appendChild(link)
    li.appendChild(removeButton)

    bookmarkList.appendChild(li)  
}

function getBookmarksFromStorage(){
    const bookmarks = localStorage.getItem("bookmarks")
    return bookmarks ? JSON.parse(bookmarks) : []
}



function saveBookmark(name,url){
    const bookmarks = getBookmarksFromStorage()
    bookmarks.push({name,url})
    localStorage.setItem('bookmarks',JSON.stringify(bookmarks))
}

function loadBookmarks(){
    const bookmarks = getBookmarksFromStorage()
    bookmarks.forEach(bookmark => {
        addBookmark(bookmark.name,bookmark.url)
    })
}

function removeBookmarkFromStorage(name,url){
    let bookmarks = getBookmarksFromStorage()
    bookmarks = bookmarks.filter((bookmark) =>{
        return bookmark.name!== name || bookmark.url !== url
    })
    localStorage.setItem('bookmarks',JSON.stringify(bookmarks))

}