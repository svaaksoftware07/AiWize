import { toast } from "react-toastify";
export const messageAlert = (value = null) => {
    if (value === "507f191e810c19729de861") {
        toast.success("Mesage has been send")
    }
    else if (value === "507f191e810c19729de860") {
        toast.error("Something went wrong");
    }
}