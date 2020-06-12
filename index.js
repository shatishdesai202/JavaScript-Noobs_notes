let jtime = document.getElementById('time')
let settime = new Date()
jtime.innerText = settime
console.log(jtime)
let jsaddbtn = document.getElementById('addBtn')
show()


jsaddbtn.addEventListener('click', function(){
        
    let jsaddText = document.getElementById('addText')
    let getnotes = localStorage.getItem('note')

    if(getnotes == null){
        jsobj = []
    }else{
        jsobj = JSON.parse(getnotes)
    }
    
    jsobj.push(jsaddText.value)
    localStorage.setItem('note',JSON.stringify(jsobj))
    jsaddText.value = ""
    show()
    
})

function show(){

    let getnotes = localStorage.getItem('note')

    if(getnotes == null){
        jsobj = []
    }else{
        jsobj = JSON.parse(getnotes)
    }

    html = ''
    Array.from(jsobj).forEach(function(element, index){

        html+= `<div class="card mx-2 my-2 searching" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">${index}</h5>
                        <p class="card-text">${element}</p>
                        <button id=${index}  onClick="deleteNote(this.id)" class="btn btn-primary"> Delete Notes</button>
                    </div>
                </div>`
    })  

    let show = document.getElementById('notes')
    show.innerHTML = html
}

function deleteNote(index){
    
    let getnotes = localStorage.getItem('note')

    jsobj = JSON.parse(getnotes)

    jsobj.splice(index ,1)
    localStorage.setItem('note', JSON.stringify(jsobj))
    show()

}

let search = document.getElementById('searchText')
search.addEventListener('input', function(){
    let val = search.value.toLowerCase()
    let findtag = document.getElementsByClassName('searching')

    Array.from(findtag).forEach(function(element){
            let word = element.getElementsByTagName('p')[0].innerText
    
            if(word.includes(val)){
                element.style.display ="block"
            }else{
                element.style.display ="none"
            }
    })
})
