
//! 10 arlı array oluşturmak için kullanılmıştır
//(10) [Array(10), Array(10), Array(10), Array(10), Array(10), Array(10), Array(10), Array(10), Array(10), Array(10)]


const paginate = (followers) => {
    const itemsPerPage = 10
    const numberOfPages = Math.ceil(followers.length / itemsPerPage)

    const newFollowers = Array.from({ length: numberOfPages }, (_, index) => {
        const start = index * itemsPerPage
        return followers.slice(start, start + itemsPerPage)
    })

    return newFollowers
}

export default paginate




//! Sequence generator function (commonly referred to as "range", e.g. Clojure, PHP, etc.)
    //? const range = (start, stop, step) =>
    //?     Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step);

    //! Generate numbers range 0..4
    //? range(0, 4, 1);
    // [0, 1, 2, 3, 4]

    //! Generate numbers range 1..10 with step of 2
    //? range(1, 10, 2);
    // [1, 3, 5, 7, 9]