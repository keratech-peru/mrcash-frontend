const formatDate = (date: string) => {
    const newDate = new Date(date.slice(0, -1));
    const formattedDate = newDate?.toString()?.split(" ")?.slice(1, 4)?.join(" ");

    return formattedDate;
};

export default formatDate;
