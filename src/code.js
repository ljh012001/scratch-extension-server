
function addArduinoCod(Blockly) {
    console.log('Blockly=' + Blockly.Arduino);

    Blockly.Arduino.test = function (block) {
        // If/elseif/else condition.
        return '111 \n';
    };
    Blockly.Arduino['pin_setPinMode'] = function (block) {
        var arg0 = block.getFieldValue('PIN') || '0';
        var arg1 = block.getFieldValue('MODE') || 'INPUT';
        var code = "pinMode111111111111111111111111111111111(" + arg0 + ", " + arg1 + ");\n";
        return code;
      };
    // Blockly.Arduino.serial_band_rate = function (block) {
    //     return 'serial_band_rate() \n';
    // }
    // //motordriverboard初始化
    // Blockly.Arduino['md_mdinit'] = function (block) {
    //     var dropdown_version = this.getFieldValue('version');
    //     Blockly.Arduino.definitions_['include_md_mdinit'] = '#include <Emakefun_MotorDriver.h>';
    //     Blockly.Arduino.definitions_['md_mdinit'] = 'Emakefun_MotorDriver mMotorDriver = Emakefun_MotorDriver(0x60,' + dropdown_version + ');';
    //     return '';
    // }
    // //串口波特率
    // Blockly.Arduino['serialbeginsss'] = function (block) {
    //     var dropdown_serialbeginsssss = this.getFieldValue('serialbeginsssss');
    //     //Blockly.Arduino.definitions_['setup_serialbegin'] = '';
    //     return 'Serial.begin(' + dropdown_serialbeginsssss + '); \n';
    // }
    // //串口打印字符
    // Blockly.Arduino['serialprintsss'] = function (block) {
    //     var value_serialprintssss = Blockly.Arduino.valueToCode(this, 'serialprintssss', Blockly.Arduino.ORDER_ATOMIC);
    //     return 'Serial.println(' + value_serialprintssss.replace(/'/g, '"') + '); \n';
    // }

    return Blockly;
}

exports = addArduinoCod;
