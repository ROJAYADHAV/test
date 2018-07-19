export function power(n){
    var m,i;
    var count=0;
    for(i=1;i<=n;i++){
        m=Math.pow(i,2);
        if(m<n){
            ++count;
        }
    }
    return count;
}