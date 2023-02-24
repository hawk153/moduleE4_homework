let electricityСonsumption = 0;

class Device {
    constructor() {
        this.name = 'прибор';
        this.consumption = 0;
        this.status = {
            'plugged': false,
            'on': false,
        }
    }
    plugIn() {
        if (!this.status['plugged']) {
            console.log(`Вы подключили ваш ${this.name}.`)
            this.status['plugged'] = true
        } else {
            console.log(`Ваш ${this.name} уже подключен.`)
        }
    }

    unPlug() {
        if (this.status['plugged']) {
            console.log(`Вы отключили ваш ${this.name}.`)
            this.status['plugged'] = false
            this.status['on'] = false
        } else {
            console.log(`Ваш ${this.name} уже отключен.`)
        }
    }
    switchOn() {
        if (this.status['plugged']) {
            if (!this.status['on']) {
                console.log(`${this.name} включен!`)
                electricityСonsumption += this.consumption;
                this.status['on'] = true
            } else { console.log(`Невозможно это сделать. ${this.name} уже включен!`) }
        } else { console.log(`Сначала подключите ${this.name} к розетке!`) }
    }

    switchOff() {
        if (this.status['on']) {
            console.log(`${this.name} выключен!`)
            this.status['on'] = false
        } else { console.log(`Невозможно это сделать. ${this.name} уже выключен!`) }
    }

    getPowerConsumption() {
        console.log(`Потребление электричества всеми приборами в доме ${electricityСonsumption} кв/ч.`)
    };

}

class Iron extends Device {
    constructor(company, power) {
        super();
        this.name = `утюг ${company}`;
        this.consumption = Math.round(power / 10);
    }
    plugIn() { return super.plugIn() }
    unPlug() { return super.unPlug() }
    switchOn() { return super.switchOn() }
    switchOff() { return super.switchOff() }
    spray() {
        if (this.status['on']) {
            console.log(`Отпаривание...`)
            electricityСonsumption += Math.round(this.consumption / 2)
        } else { console.log(`Невозможно отпарить, ${this.name} выключен!`) }
    }
}

class TvSet extends Device {
    constructor(company, power, size) {
        super();
        this.name = `телевизор ${company}`;
        this.consumption = Math.round(power / 10);
        this.size = size
    }
    plugIn() { return super.plugIn() }
    unPlug() { return super.unPlug() }
    switchOn() { return super.switchOn() }
    switchOff() { return super.switchOff() }
    setUp() {
        if (this.status['on']) {
            console.log(`Настройка каналов...`)
        } else { console.log(`Невозможно настроить каналы. Сначала включите ваш ${this.name}!`) }
    }
    getInfo() {
        console.log(`Ваш ${this.name} с диагональю экрана ${this.size} дюймов.`)
    }
}

myIron = new Iron('Bosch', 880)
myTv = new TvSet('Sharp', 250, 55)


myIron.plugIn()
myIron.switchOn()
myIron.getPowerConsumption()
myIron.spray()
myIron.getPowerConsumption()
myTv.plugIn()
myTv.switchOn()
myTv.unPlug()
myTv.setUp()
myTv.getInfo()
myTv.unPlug()
myIron.getPowerConsumption()
