import { useGlobalContext } from "../context"


const useRemoveTour = () => {
    const {tours, setTours} = useGlobalContext();

    const removeTour = (id) => {
        const newTours = tours.filter((tour) => tour.id !== id);
        //! filter methodu array olan tours içindeki herbir tour objelerine ulaşır ve onun id  lerini gönderdiğimiz id ile
        //! karşılaştırır eğer id eşleşmezse onları alır ve yeniden bir array oluşturur
        setTours(newTours);
    }
    return { removeTour };
}

export default useRemoveTour