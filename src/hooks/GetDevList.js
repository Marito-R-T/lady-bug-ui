export default function getDevs(setItems) {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json', 'Acces-Control-Allow-Origin': '*' }
    };
    fetch('https://ladybugger.herokuapp.com/admin/devs-list', requestOptions).then(res => res.json())
    .then(response => {
        console.log(response);
        var list = [];
        response.forEach(e => {
            if(e[2] == null) {
                list = list.concat({ "id": e[0], "label": e[0] + ". " + e[1] + "" });
            } else {
                list = list.concat({ "id": e[0], "label": e[0] + ". " + e[1] + " " + e[2] });
            }
        });
        setItems(list);
    });
    /*var list = []
    items.data.memes.map(item => (
        list = list.concat({ "id": item.id, "label": item.name })
    ))*/
    //console.log(items)
}