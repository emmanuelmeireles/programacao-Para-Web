function potencia(x, k) {
    if (k === 0) {
        return 1;
    }
    return x * potencia(x, k - 1);
}
