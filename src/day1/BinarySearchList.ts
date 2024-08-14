export default function bs_list(haystack: number[], needle: number): boolean {
    // how to seach binary
    // used in only sorted array
    // check needle is greater or lower than middle value
    // if it is in greater part change searchable part to second half of array
    // if it is in lower pert change seachable part to first half of array
    
    // 1 2 3 4 5 6 7 8 9 0
    //      <- v ->       
    // hi = m     lo = m + 1                     
                             
    let lo = 0
    let hi = haystack.length

    do {
        const m = Math.floor(lo + (hi - lo) / 2) // search the middle point - always floor values
        const v = haystack[m]        

        if ( v === needle) { // if value at middle is needle its completed
            return true
        } else if ( needle < v) {
        // needle is in lower part so change the searchable are to lower part of array so 
        // now you high value is middle part
            hi = m
        } else {
        // needle is in greater part so lower value now is middle but exclusive so middle + 1
            lo = m + 1
        }
        
    } while (lo < hi);
        return false
}
