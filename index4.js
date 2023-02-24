let electricityСonsumption = 0;

function Device() {
    this.name = 'прибор';
    this.status = {
        'plugged': false,
        'on': false,
    }

    this.plugIn = () => {
        if (!this.status['plugged']) {
            console.log(`Вы подключили ваш ${this.name}.`)
            this.status['plugged'] = true
        } else {
            console.log(`${this.name} уже подключен.`)
        }
    }

    this.unPlug = () => {
        if (this.status['plugged']) {
            console.log(`Вы отключили ваш ${this.name}.`)
            this.status['plugged'] = false
            this.status['on'] = false
        } else {
            console.log(`${this.name} уже отключен.`)
        }
    }

    this.switchOn = () => {
        if (this.status['plugged']) {
            if (!this.status['on']) {
                console.log(`${this.name} включен!`)
                electricityСonsumption += 50;
                this.status['on'] = true
            } else { console.log(`Невозможно это сделать. ${this.name} уже включен!`) }
        } else { console.log(`Сначала подключите ${this.name} к розетке!`) }
    }

    this.switchOff = () => {
        if (this.status['on']) {
            console.log(`${this.name} выключен!`)
            this.status['on'] = false
        } else { console.log(`Невозможно это сделать. ${this.name} уже выключен!`) }
    }

    this.getPowerConsumption = () => {
        console.log(`Потребление электричества всеми приборами в доме ${electricityСonsumption} кв/ч.`)
    };

}

function Iron(company, power) {
    this.name = `утюг ${company}`;
    this.power = power;

    this.switchOn = () => {
        if (this.status['plugged']) {
            if (!this.status['on']) {
                console.log(`${this.name} включен!`)
                electricityСonsumption += this.power / 10;
                this.status['on'] = true
            } else { console.log(`Невозможно это сделать. ${this.name} уже включен!`) }
        } else { console.log(`Сначала подключите ${this.name} к розетке!`) }
    }

    this.switchOff = () => {
        if (this.status['on']) {
            console.log(`${this.name} выключен!`)
            this.status['on'] = false
        } else { console.log(`Невозможно это сделать, ${this.name} уже выключен!`) }
    }

    this.spray = () => {
        if (this.status['on']) {
            console.log(`Отпаривание...`)
        } else { console.log(`Невозможно отпарить, ${this.name} выключен!`) }
    }
}

function TvSet(company, power, size) {
    this.name = `телевизор ${company}`;
    this.power = power;
    this.size = size;

    this.switchOn = () => {
        if (this.status['plugged']) {
            if (!this.status['on']) {
                console.log(`${this.name} включен!`)
                electricityСonsumption += this.power / 10;
                this.status['on'] = true;
            } else { console.log(`Невозможно это сделать. ${this.name} уже включен!`) }
        } else { console.log(`Сначала подключите ${this.name} к розетке!`) }
    }

    this.switchOff = () => {
        if (this.status['on']) {
            console.log(`${this.name} выключен!`)
            this.status['on'] = false;
        } else { console.log(`Невозможно это сделать. ${this.name} уже выключен!`) }
    }

    this.setUp = () => {
        if (this.status['on']) {
            console.log(`Настройка каналов...`)
        } else { console.log(`Сначала включите ваш ${this.name}!`) }
    }

    this.getInfo = function () {
        console.log(`Ваш ${this.name} с диагональю экрана ${this.size} дюймов.`)
    }
}

Iron.prototype = new Device()
TvSet.prototype = new Device()


let myIron = new Iron('Philips', 800);
let myTv = new TvSet('Hisense', 200, 65);

myIron.plugIn()
myIron.switchOn()
console.log(myIron.status)
myIron.spray()
myIron.getPowerConsumption()
myIron.switchOff()
myIron.switchOn()
myIron.unPlug()
myTv.switchOn()
myTv.plugIn()
myTv.getInfo()
myTv.switchOn()
myTv.setUp()
myTv.switchOff()
myTv.getPowerConsumption()
myTv.unPlug()

