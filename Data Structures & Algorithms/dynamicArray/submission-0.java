class DynamicArray {

    private int capacity, length;
    private int[] array;

    public DynamicArray(int capacity) {
        this.capacity = capacity;
        this.length = 0;
        this.array = new int[this.capacity];
    }

    public int get(int i) {
        return array[i];
    }

    public void set(int i, int n) {
        array[i] = n;
    }

    //Push elements to the end of the array
    //If its length == capacity we need to resize
    public void pushback(int n) {
        if(length == capacity){
            this.resize();
        }

        array[length] = n;
        length++;
    }

    //Soft delete elements in the array
    public int popback() {
        if(length > 0){
            length--;
        }

        return array[length];
    }

    //Create a new array double the size
    //Copy all the elements to the new array
    private void resize() {
        this.capacity *= 2;
        int[] newArr = new int[this.capacity];

        for(int i = 0; i < length; i++){
            newArr[i] = this.array[i];
        }

        this.array = newArr;
    }

    public int getSize() {
        return length;
    }

    public int getCapacity() {
        return capacity;
    }
}
