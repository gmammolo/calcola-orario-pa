class Timer {
  /**
   *
   * @param {string} value
   */
  constructor(value) {
    this.h = 0;
    this.m = 0;
    if (value && Timer.checkTimerString(value)) {
      const s = value.split(':');
      this.h = parseInt(s[0]);
      this.m = parseInt(s[1]);
    }
  }

  toString() {
    const min = this.m < 10 ? '0' + this.m : this.m + '';
    return this.h + ':' + min;
  }

  /**
   * Verifica se il valore passato è un timer corretto (08:00)
   * @param {string} value timer da testare
   * @returns {boolean} true se è ben formattato, false altrimenti
   */
  static checkTimerString(value) {
    const reg = new RegExp('^[0-2]{0,1}[0-9]:[0-5]{0,1}[0-9]$');
    return reg.test(value);
  }

  /**
   * Somma due timer
   * @param {Timer} t1
   * @param {Timer} t2
   * @returns {Timer}
   */
  static somma(t1, t2) {
    const res = new Timer();
    res.m = t1.m + t2.m;
    const riporto_minuti = Math.floor(res.m / 60);
    res.m = res.m % 60;
    res.h = t1.h + t2.h + riporto_minuti;
    return res;
  }
}
