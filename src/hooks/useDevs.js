import axios from "axios";

export default async function useDevs(setItems) {
    try {
        const response = await axios.get('https://ladybugger.herokuapp.com/admin/devs-list');
        let list = [];
        response.data.forEach(e => {
            if(e[2] == null) {
                list = list.concat({ "id": e[0], "label": e[0] + ". " + e[1] + "" });
            } else {
                list = list.concat({ "id": e[0], "label": e[0] + ". " + e[1] + " " + e[2] });
            }
        });
        setItems(list);
    } catch(error) {
        console.error(error)
    }
}