function pascale(num) {
    list=[]
    for (let i = 0; i <= num; i++) {
        let k = 1
        let row = []
        for (let j = 0; j <= i; j++) {
            if (j == 0) {
                row.push(k)
            } else {
                if (isNaN(list[i - 1][j] + list[i - 1][j - 1])) {
                    row.push(k);
                }
                else {
                    row.push(list[i - 1][j] + list[i - 1][j - 1])
                }
            }



        }
        list.push(row)

    }
    return list
}
