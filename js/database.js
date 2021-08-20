var Database = {
    name: 'bb',
    version: 1,
    db: null
};

// var openDB = function(name, version) {
//     console.log('version:' + version);
//     version = version || 1;
//     var request = window.indexedDB.open(name, version);
//     request.onerror = function(e) {
//         console.log(e);
//     };
//     request.onsuccess = function(e) {
//         console.log('DB success');
//         Database.db = e.target.result;
//         console.log('num前:' + num);
//         num = num + 1;
//         console.log('num后:' + num);
//         // db = e.target.result;
//         // var objectStore;
//         // if (! Database.db.objectStoreNames.contains('bbRecordObj')) {
//         //     objectStore =  Database.db .createObjectStore('bbRecordObj', { keyPath: 'id' });
//         //     console.log("objectStore");
//         //     console.log(objectStore);
//         // }
//     };
//     request.onupgradeneeded = function(e) {
//         console.log('DB version changed to ' + version);
//         Database.db = e.target.result;
//         // var objectStore;
//         // if (! Database.db.objectStoreNames.contains('bbRecordObj')) {
//         //     objectStore =  Database.db .createObjectStore('bbRecordObj', { keyPath: 'id' });
//         //     console.log("objectStore");
//         //     console.log(objectStore);
//         // }
//
//     };
// };

var openDB = function(name, version) {
    console.log('version:' + version);
    version = version || 1;
    var request = window.indexedDB.open(name, version);
    request.onerror = function(e) {
        console.log(e);
    };
    request.onsuccess = function(e) {
        console.log('DB success');
        // console.log("e");
        // console.log(e);
        // console.log(e.target);
        // console.log(e.target.result);

        Database.db = e.target.result;
        console.log( Database.db);
        // console.log('num前:' + num);
        // num = num + 1;
        // console.log('num后:' + num);
        // var objectStore;
        // console.log(Database.db.objectStoreNames);
        // if (! Database.db.objectStoreNames.contains('bbRecordObj')) {
        //     console.log("not content");
        //     objectStore =  Database.db.createObjectStore('bbRecordObj', { keyPath: 'id' });
        //     console.log("createObjectStore after");
        //     console.log("objectStore");
        //     console.log(objectStore);
        // }
        // put(1);
        read();
        // 这个要onsucces 才能写入 异步的因为
    };
    request.onupgradeneeded = function(e) {
        console.log('DB version changed to ' + version);
        Database.db = e.target.result;
        var objectStore;
        console.log(Database.db.objectStoreNames);
        if (! Database.db.objectStoreNames.contains('bbRecordObj')) {
            console.log("not content");
            objectStore =  Database.db.createObjectStore('bbRecordObj', { keyPath: 'id' });
            console.log("createObjectStore after");
            console.log("objectStore");
            console.log(objectStore);
        }
    };
};

function put(content) {

    let bbRecordObjNoScoreStr =`
    {"title":"执行测验: CH3-2020","description":"无描述","questions":[{"queText":"某C语言程序中对数组变量b的声明为“int b[10][5]有一条for语句如下：for (i=0; i<10, i++)for (j=0; j<5; j++)sum+= b[i][j];假设执行到“sum+= b[i][j];\\"时，sum 的值在EAX中，b[i][0] 所在的地址在EDX中，j在ESI中，则“\\"sum+= b[i][j];\\"所对应的指令(AT&T格式)可以是（  ）","answers":[{"text":"addl  0(%edx, %esi, 2), %eax","chosen":false},{"text":"addl  0(%esi;, %edx, 2), %eax","chosen":false},{"text":"addl  0(%esi, %edx, 4), %eax","chosen":false},{"text":"addl  0(%edx, %esi, 4), %eax","chosen":true}],"type":"choose"},{"queText":"以下关于\\n\\nif (cond _expr) \\n\\nthen. satement \\n\\nelse \\n\\nelse Statement \\n\\n选择结构对应的机器级代码表示的叙述中，错误的是(  )。","answers":[{"text":"对应then_ statement 的代码一定在对应else_ statement 的代码之前","chosen":false},{"text":"一定包含一条无条件转移指令","chosen":true},{"text":"一定包含一条条件转移指令(分支指令)","chosen":false},{"text":"计算cond expr的代码段一定在条件转移指令之前","chosen":false}],"type":"choose"},{"queText":"以下有关C语言程序的变量的作用域和生存期的叙述中，错误的是(  )。","answers":[{"text":"静态(static型)变量和非静态局部(auto型)变量都分配在对应栈帧中","chosen":true},{"text":"不同过程中的非静态局部变量可以同名，是因为它们被分配在不同栈帧中","chosen":false},{"text":"非静态局部变量可以和全局变量同名，是因为它们被分配在不同存储区","chosen":false},{"text":"因为非静态局部变量被分配在栈中，所以其作用域仅在过程体内","chosen":false}],"type":"choose"},{"queText":"以下有关缓冲区溢出以及缓冲区溢出攻击的叙述中，错误的是(  )。","answers":[{"text":"只要发生缓冲区溢出，CPU就会跳转到恶意程序事先设定好的程序去执行","chosen":true},{"text":"当传送到栈中局部数组中的字符的个数超过数组长度时发生缓冲区溢出","chosen":false},{"text":"恶意程序可利用像strcpy等无字符串长度设定的c库函数进行缓冲区溢出攻击","chosen":false},{"text":"只要发生缓冲区溢出，寄存器内容或变量或返回地址等程序信息就可能被修改","chosen":false}],"type":"choose"},{"queText":"假定全局short型数组a的起始地址为0x804908c，则a[2]的地址是(  )。","answers":[{"text":"0x8049092","chosen":false},{"text":"0x804908e","chosen":false},{"text":"0x8049094","chosen":false},{"text":"0x8049090","chosen":true}],"type":"choose"},{"queText":"IA-32中指令“ pushl %ebp\\"的功能是(  )","answers":[{"text":"M[R[esp]]←R[ebp], R[esp] ←R[esp]+4","chosen":false},{"text":"R[esp]←R[esp]+4, M[R[esp]] ←R[ebp]","chosen":false},{"text":"R[esp]←R[esp]-4, M[R[esp]] ←R[ebp]","chosen":true},{"text":"M[R[esp]]←R[ebp], R[esp] ←R[esp]-4","chosen":false}],"type":"choose"},{"queText":"假定全局数组a的声明为char *a[8], a的首地址为0x80498c0, i在ECX中，现要将a[i]取到EAX相应宽度的寄存器中，则所用的汇编指令是(  )。","answers":[{"text":"mov 0x80498c0(，%ecx), %ah","chosen":false},{"text":"mov (0x80498c0, %ecx, 4), %eax","chosen":false},{"text":"mov (0x80498c0, %ecx), %ah","chosen":false},{"text":"mov 0x80498c0(, %ecx, 4), %eax","chosen":true}],"type":"choose"},{"queText":"假设short型变量x被分配在寄存器AX中，若R[ax]=FF70H，则执行指令“salw $2, %ax”后，变量x的机器数和真值分别是(  )","answers":[{"text":"FDC0H, -576","chosen":true},{"text":"FDC3H，-573","chosen":false},{"text":"FFDCH, -36","chosen":false},{"text":"3FDC，16348","chosen":false}],"type":"choose"},{"queText":"以下关于IA-32中整数运算指令所支持的操作数的叙述中，错误的是(   )。","answers":[{"text":"对于乘除运算指令，操作数一定区 分是无符号整数还是带符号整数","chosen":false},{"text":"除乘法指令外，其他运算指令的源操作数和目的操作数的位数相等","chosen":true},{"text":"参加运算的操作数可以是一个字节(8b)、一个字(16b)或双字(32b)","chosen":false},{"text":"对于加减运算指令，操作数不区分是无符号整数还是带符号整数","chosen":false}],"type":"choose"},{"queText":"IA-32 中指令“movl  8(%ebp), %edx” 的功能是（）","answers":[{"text":"R[ebp]+8←R[edx]","chosen":false},{"text":"M[R[ebp]+8] ←R[edx]","chosen":false},{"text":"R[edx]←M[R[ebp]+8]","chosen":true},{"text":"R[edx]←R[ebp]+8","chosen":false}],"type":"choose"},{"queText":"假定全局数组a的声明为double *a[8]，a的首地址为0x80498c0，i在ECX中，现要将a[i]取到EAX相应宽度的寄存器中，则所用的汇编指令是(  )","answers":[{"text":"mov (0x80498c0, %ecx, 4), %eax","chosen":false},{"text":"mov 0x80498c0( ，%ecx, 8), %eax","chosen":false},{"text":"mov (0x80498c0, %ecx, 8), %eax","chosen":false},{"text":"mov 0x80498c0(, %ecx, 4), %eax","chosen":false}],"type":"choose"},{"queText":"以下有关IA-32的过程调用所使用的栈和栈帧的叙述中，错误的是(  )","answers":[{"text":"每进行一次过程调用，用户栈从高地址向低地址增长出二个栈帧","chosen":false},{"text":"从被调用过程返回调用过程之前，被调用过程会释放自己的栈帧","chosen":false},{"text":"过程嵌套调用深度越深，栈中栈帧个数越多，严重时会发生栈溢出","chosen":false},{"text":"只能通过将栈指针ESP作为基址寄存器来访问用户栈中的数据","chosen":true}],"type":"choose"},{"queText":"假定静态short型二维数组b的声明如下:static short b[2][4]={ {2, 9, -1, 5}, {3, 1, -6, 2 }};若b的首地址为0x8049820,则按行优先存储方式下，地址0x804982c中的内容是(  )。","answers":[{"text":"0xfa","chosen":true},{"text":"0xff","chosen":false},{"text":"0x00","chosen":false},{"text":"0x05","chosen":false}],"type":"choose"},{"queText":"某C语言程序中有以下两个变量声明:int a[10];int *ptr=&a[0];则ptr+i的值为(  )。","answers":[{"text":"&a[0]+i","chosen":true},{"text":"&a[0]+2xi","chosen":false},{"text":"&a[0]+4xi","chosen":false},{"text":"&a[0]+8xi","chosen":false}],"type":"choose"},{"queText":"程序P中有两个int类型变量i和j，被分别分配在寄存器EAX和EDX中，P中存在以下if语句:if (i<j) {    };\\n该if语句对应的指令序列一定不会是(  )","answers":[{"text":"cmpl %eax, %edxjle 804847c","chosen":true},{"text":"cmpl %edx, %eaxjl 8048460","chosen":false},{"text":"cmpl %eax, %edxjg 8048480","chosen":false},{"text":"cmpl %eax, %edxja 8048380","chosen":false}],"type":"choose"},{"queText":"程序P中有两个变量i和j，被分别分配在寄存器EAX和EDX中，P中语句“if(i<j) {    }”对应的指令序列如下(左边为指令地址，中间为机器代码，右边为汇编指令):804846a  39 c2   cmpl %eax, %edx804846c  7e 0d   jle  xxxxxxxxx若执行到804846a处的cmpl指令时，i=105, j=100,则jle指令执行后将会转到(  )处的指令执行。","answers":[{"text":"8048461","chosen":false},{"text":"804846e","chosen":false},{"text":"8048479","chosen":true},{"text":"804847b","chosen":false}],"type":"choose"},{"queText":"假定局部int型数组a的首地址在EDX中，i在ECX中，现要将a[i]取到EAX相应宽度的寄存器中，则所用的汇编指令是(  )","answers":[{"text":"mov (%edx, %ecx, 4), %eax","chosen":true},{"text":"mov (%edx, %ecx, 4), %ax","chosen":false},{"text":"mov (%edx, %ecx, 2), %eax","chosen":false},{"text":"mov (%edx, %ecx, 2), %ax","chosen":false}],"type":"choose"},{"queText":"以下有关IA-32/Linux的过程调用的叙述中，错误的是(  )","answers":[{"text":"在过程中通常先使用被调用者保存寄存器","chosen":true},{"text":"通常EBP寄存器指向对应栈帧(stack frame)的底部","chosen":false},{"text":"通常每个栈帧底部单元中存放其调用过程的EBP内容","chosen":false},{"text":"每个过程都有一个栈帧，其大小为16B的倍数","chosen":false}],"type":"choose"},{"queText":"以下有关递归过程调用的叙述中，错误的是(  )。","answers":[{"text":"递归过程第一个参数的有效地址为R[ebp]+8","chosen":false},{"text":"每次递归调用都会生成-个新的栈帧，因而空间开销大","chosen":false},{"text":"可能需要执行递归过程很多次，因而时间开销大","chosen":false},{"text":"每次递归调用在栈帧中保存的返回地址都不相同","chosen":true}],"type":"choose"},{"queText":"假定静态short型二维数组b的声明如下: static short b[2][4]={ {2, 9, -1，5}, {3，8, 2, -6}};若b的首地址为0x8049820,则按行优先存储方式下，数组元素“8” 的地址是(  )。","answers":[{"text":"0x8049828","chosen":false},{"text":"0x8049825","chosen":false},{"text":"0x8049824","chosen":false},{"text":"0x804982a","chosen":true}],"type":"choose"},{"queText":"假定int型数组a的首址在ECX中，则“a送EAX\\"所对应的汇编指令是(  )。","answers":[{"text":"leal (%ecx, 0), %eax","chosen":true},{"text":"movl %edx, %eax","chosen":false},{"text":"leal (%ecx, 4), %eax","chosen":false},{"text":"movl %ecx, %eax","chosen":false}],"type":"choose"},{"queText":"假设R[ax]=FFE8H, R[bx]=7FE6H,执行指令“ subw %bx, %ax\\"后，寄存器的内容和各标志的变化为(  )","answers":[{"text":"R[ax]=8002H, OF=0，SF=1, CF=0，ZF=0","chosen":false},{"text":"R[bx]=8002H, OF=0, SF=1, CF=0， ZF=0","chosen":false},{"text":"R[bx]=8002H, OF=1, SF=1, CF=0，ZF=0","chosen":true},{"text":"R[ax]=8002H, OF=1, SF=1, CF=0，ZF=0","chosen":false}],"type":"choose"},{"queText":"IA-32中指令“leal  8(%edx, %esi, 4), %edx\\"的功能是(  )","answers":[{"text":"R[edx]←R[edx]+R[esi]*4+8","chosen":true},{"text":"R[esi]+R[edx]*4+8←R[edx]","chosen":false},{"text":"R[edx]+R[esi]*4+8←R[edx]","chosen":false},{"text":"R[edx]←R[esi]+R[edx]*4+8","chosen":false}],"type":"choose"},{"queText":"假设R[ax]=FFE8H, R[bx]=7FE6H, 执行指令“ addw %bx, %ax\\"后，寄存器的内容和各标志的变化为(  )","answers":[{"text":"R[ax]=7FCEH，OF=1, SF=0, CF=0, ZF=0","chosen":true},{"text":"R[bx]=7FCEH，OF=0，SF=0，CF=1, ZF=0","chosen":false},{"text":"R[ax]=7FCEH, OF=0, SF=0, CF=1, ZF=0","chosen":false},{"text":"R[bx]=7FCEH, OF=1, SF=0, CF=0，ZF=0","chosen":false}],"type":"choose"},{"queText":"假定静态short 型二维数组b和指针数组pb的声明如下:static short b[2][4] ={ {2, 9, -1, 5}, {3, 1, -6, 2 }};static short *pb[2]={b[0], b[1]}若b的首地址为0x8049820,则&pb[1]的值是(  )。","answers":[{"text":"0x8049834","chosen":false},{"text":"0x8049832","chosen":false},{"text":"0x8049838","chosen":false},{"text":"0x8049830","chosen":true}],"type":"choose"},{"queText":"以下关于IA-32指令格式的叙述中，错误的是(  )","answers":[{"text":"指令中给出的操作数所在的通用寄存器的宽度总是32位","chosen":true},{"text":"采用变长指令字格式，指令长度从整个字节到十几个字节不等","chosen":false},{"text":"指令中指出的位移量和立即数的长度可以是0、1、2或4个字节","chosen":false},{"text":"采用变长操作码，操作码位数可能是5位到十几位不等","chosen":false}],"type":"choose"},{"queText":"以下关于各类控制转移指令的叙述中，错误的是(  )","answers":[{"text":"调用指令(CALL)和返回指令(RET)都是特殊的无条件转移指令","chosen":false},{"text":"条件转移指令(Jcc)的判断条件可用于整数之间和浮点数之间的大小比较","chosen":true},{"text":"条件转移指令(Jcc) 将根据EFLAGS寄存器中的标志信息进行条件判断","chosen":false},{"text":"无条件转移指令(JMP) 直接将转移目标地址送到EIP寄存器中","chosen":false}],"type":"choose"},{"queText":"4.指令集体系结构(ISA) 是计算机系统中必不可少的一个抽象层，它是对硬件的抽象，软件通过它所规定的指令系统规范来使用硬件。以下有关ISA的叙述中，错误的是(  )","answers":[{"text":"ISA规定了指令的操作数类型、寄存器结构、存储空间大小、编址方式和大端/小端方式","chosen":true},{"text":"ISA规定了指令获取操作数的方式，即寻址方式","chosen":false},{"text":"ISA规定了所有指令的集合，包括指令格式和操作类型","chosen":false},{"text":"ISA规定了执行每条指令时所包含的控制信号","chosen":false}],"type":"choose"},{"queText":"程序P中有两个unsigned类型变量i和j，被分别分配在寄存器EAX和EDX中，P中存在以下if语句: if (i<j) { … } ;该if语句对应的指令序列一定不会是(  )。","answers":[{"text":"cmpl %edx, %eax jb 8048460","chosen":false},{"text":"cmpl %eax, %edx ja 8048380","chosen":true},{"text":"cmpl %eax, %edx jae 8048480","chosen":false},{"text":"cmpl %eax, %edx Jbe  804847c","chosen":false}],"type":"choose"},{"queText":"以下关于IA-32的定点寄存器组织的叙述中，错误的是(  )。","answers":[{"text":"EIP/IP为指令指针寄存器，即PC; EFLAGS/FLAGS 为标志寄存器","chosen":false},{"text":"每个通用寄存器都可作为32位、16 位或8位寄存器使用","chosen":false},{"text":"寄存器ESP/SP称为栈指针寄存器, EBP/BP 称为基址指针寄存器","chosen":true},{"text":"寄存器EAX/AX/AL称为累加器，ECX/CX/CL称为计数寄存器","chosen":false}],"type":"choose"},{"queText":"假设P为调用过程，Q为被调用过程，程序在IA-32处理器上执行，以下有关过程调用的叙述中，错误的是(  )、","answers":[{"text":"从P跳转到Q执行应使用CALL指令","chosen":false},{"text":"从P传到Q的实参无需重新分配空间存放","chosen":true},{"text":"从Q跳回到P执行应使用RET指令","chosen":false},{"text":"C语言程序中的函数调用就是过程调用","chosen":false}],"type":"choose"},{"queText":"IA-32中指令“movl 8(%edx, %esi, 4), %edx\\"的功能是(  )","answers":[{"text":"R[edx]←M[R[edx]+R[esi]*4+8]","chosen":true},{"text":"M[R[edx]+R[esi]*4+8]← R[edx]","chosen":false},{"text":"R[edx]←M[R[esi]+R[edx]*4+8]","chosen":false},{"text":"M[R[esi]+R[edx]*4+8]←R[edx]","chosen":false}],"type":"choose"},{"queText":"假设R[eax]=FF000008H, R[ecx]=00001000H，执行指令“ testl %eax, %ecx”后，寄存器的内容和标志变为(  ) 。","answers":[{"text":"寄存器内容不变，OF=CF=SF=0, ZF=1","chosen":true},{"text":"R[ecx]=00000000H，OF=CF=SF=0，ZF=1","chosen":false},{"text":"R[eax]=00000000H，OF=CF=SF=0, ZF=1","chosen":false},{"text":"R[ecx]=0000000H，标志不变","chosen":false}],"type":"choose"},{"queText":"假定局部数组a的声明为int a[4)={0,-1, 300, 20}，a的首地址为R[ebp]-16,则在地址R[ebp]- 4处存放的是(  )。","answers":[{"text":"0","chosen":false},{"text":"20","chosen":true},{"text":"300","chosen":false},{"text":"-1","chosen":false}],"type":"choose"},{"queText":"以下关于1A-32处理器对齐方式的叙述中，错误的是(  )。","answers":[{"text":"不同操作系统采用的对齐策略可能不同","chosen":false},{"text":"对于同-一个struct型变量，在不同对齐方式下可能会占用不同大小的存储区","chosen":false},{"text":"可以用编译指导语句(如tpragma pack)设置对齐方式","chosen":false},{"text":"总是按其数据宽度进行对齐，例如double型变量的地址总是8的倍数","chosen":true}],"type":"choose"},{"queText":"以下关于 IA-32指令寻址方式的叙述中，错误的是(  )。","answers":[{"text":"存储器操作数中最复杂的寻址方式是“ 基址加比例变址加位移”","chosen":false},{"text":"操作数可以是指令中的立即数，也可以是通用寄存器或存储单元中的内容","chosen":false},{"text":"对于寄存器操作数，必须在指令中给出通用寄存器的3位编号","chosen":false},{"text":"相对寻址的目标地址为“PC 内容加位移”，PC内容指当前正在执行指令的地址","chosen":true}],"type":"choose"},{"queText":"假定全局double型数组a的起始地址为0x804908c，则a[i]的地址是(  )","answers":[{"text":"0x804908c+2*i","chosen":false},{"text":"0x804908c+8*i","chosen":true},{"text":"0x804908c+i","chosen":false},{"text":"0x804908c+4* i","chosen":false}],"type":"choose"},{"queText":"假设P为调用过程，Q为被调用过程，程序在IA-32处理器上执行，以下是C语言程序中过程调用所涉及的操作:①过程Q保存P的现场，并为非静态局部变量分配空间②过程P将实参存放到Q能访问到的地方③过程P将返回地址存放到特定处，并跳转到Q执行④过程Q取出返回地址，并跳转回到过程P执行⑤过程Q恢复P的现场，并释放局部变量所占空间⑥执行过程Q的函数体过程调用的正确执行步骤是(  )","answers":[{"text":"②→③→④→①→⑤→⑥","chosen":false},{"text":"②→③→①→④→⑥→⑤","chosen":false},{"text":"②→③→①→⑥→⑤→④","chosen":true},{"text":"②→③→①→⑤→⑥→④","chosen":false}],"type":"choose"},{"queText":"假定int型数组a的首址在 ECX中，i在EDX中， 则“&a[i]-a 送EAX\\"所对应的汇编指令是(  )。","answers":[{"text":"leal ( ,%edx, 4), %eax","chosen":true},{"text":"leal ( ,%ecx, 4), %eax","chosen":false},{"text":"movl %ecx, %eax","chosen":false},{"text":"movl %edx, %eax","chosen":false}],"type":"choose"},{"queText":"以下选项中，不属于指令集体系结构名称的是(  )","answers":[{"text":"ARM","chosen":false},{"text":"MIPS","chosen":false},{"text":"UNIX","chosen":true},{"text":"IA-32","chosen":false}],"type":"choose"},{"queText":"以下关于循环结构语句的机器级代码表示的叙述中，错误的是(  )。","answers":[{"text":"不一定包含无条件转移指令","chosen":false},{"text":"循环体内执行的指令不包含条件转移指令","chosen":true},{"text":"一定至少包含-一 条条件转移指令","chosen":false},{"text":"循环结束条件通常用一条比较指令CMP来实现","chosen":false}],"type":"choose"},{"queText":"IA-32中指令“popl %ebp\\"的功能是(  )。","answers":[{"text":"R[esp]←R[esp]+4, R[ebp] ←M[R[esp]]","chosen":false},{"text":"R[ebp]←M[R[esp]], R[esp] ←R[esp]+4","chosen":true},{"text":"R[esp]←R[esp]-4, R[ebp] ←M[R[esp]]","chosen":false},{"text":"R[ebp]←M[R[esp]], R[esp] ←R[esp]-4","chosen":false}],"type":"choose"},{"queText":"以下关于switch语句的机器级代码表示的叙述中，错误的是(  )。","answers":[{"text":"当case中出现的条件取值范围较小时，可以用跳转表的方式实现","chosen":false},{"text":"每个case至少对应一条条件转移指令，因而一定会包含多条条件转移指令","chosen":false},{"text":"每个case对应的一段代码结束后，都会有一条无条件转移指令","chosen":false},{"text":"可以用连续的if ~ else ~ if ~ else ~ if…..语句对应的机器代码来实现switch语句","chosen":true}],"type":"choose"},{"queText":"假定int型数组a的首址在ECX中，i在EDX中，则“*(a+i)送EAX\\"所对应的汇编指令是(  )。","answers":[{"text":"leal (%edx, %ecx, 4), %eax","chosen":false},{"text":"leal (%ecx, %edx, 4)，%eax","chosen":false},{"text":"movl (%ecx, %edx, 4), %eax","chosen":true},{"text":"movl (%edx, %ecx, 4), %eax","chosen":false}],"type":"choose"},{"queText":"以下有关IA-32的过程调用方式的叙述中，错误的是(  )。","answers":[{"text":"入口参数使用栈(stack)传递，即所传递的实参被分配在栈中","chosen":false},{"text":"返回地址是CALL指令下一条指令的地址，被保存在栈中","chosen":false},{"text":"EBX、ESI、 EDI、 EBP和ESP都是被调用者保存寄存器","chosen":true},{"text":"EAX、ECX和EDX都是调用者保存寄存器","chosen":false}],"type":"choose"}]}
    `;
    let bbRecordObj = JSON.parse(bbRecordObjNoScoreStr);
    content=content||bbRecordObj;
     var request = Database.db.transaction(['bbRecordObj'], 'readwrite')
        .objectStore('bbRecordObj')
        .put({id: 1, content: content});

    request.onsuccess = function (event) {
        console.log('数据写入成功');
    };

    request.onerror = function (event) {
        console.log('数据写入失败');
        console.log(event.target.error);
    }
}
function add() {

    console.log("db:");
    console.log(Database.db);
    // VM80:32 Uncaught DOMException: Failed to execute 'transaction' on 'IDBDatabase':
    // One of the specified object stores was not found.
    //     at add (<anonymous>:32:22)
    // at <anonymous>:67:1
    // https://blog.csdn.net/qiqingjin/article/details/53263261
    let bbRecordObjNoScoreStr =`
    {"title":"执行测验: CH3-2020","description":"无描述","questions":[{"queText":"某C语言程序中对数组变量b的声明为“int b[10][5]有一条for语句如下：for (i=0; i<10, i++)for (j=0; j<5; j++)sum+= b[i][j];假设执行到“sum+= b[i][j];\\"时，sum 的值在EAX中，b[i][0] 所在的地址在EDX中，j在ESI中，则“\\"sum+= b[i][j];\\"所对应的指令(AT&T格式)可以是（  ）","answers":[{"text":"addl  0(%edx, %esi, 2), %eax","chosen":false},{"text":"addl  0(%esi;, %edx, 2), %eax","chosen":false},{"text":"addl  0(%esi, %edx, 4), %eax","chosen":false},{"text":"addl  0(%edx, %esi, 4), %eax","chosen":true}],"type":"choose"},{"queText":"以下关于\\n\\nif (cond _expr) \\n\\nthen. satement \\n\\nelse \\n\\nelse Statement \\n\\n选择结构对应的机器级代码表示的叙述中，错误的是(  )。","answers":[{"text":"对应then_ statement 的代码一定在对应else_ statement 的代码之前","chosen":false},{"text":"一定包含一条无条件转移指令","chosen":true},{"text":"一定包含一条条件转移指令(分支指令)","chosen":false},{"text":"计算cond expr的代码段一定在条件转移指令之前","chosen":false}],"type":"choose"},{"queText":"以下有关C语言程序的变量的作用域和生存期的叙述中，错误的是(  )。","answers":[{"text":"静态(static型)变量和非静态局部(auto型)变量都分配在对应栈帧中","chosen":true},{"text":"不同过程中的非静态局部变量可以同名，是因为它们被分配在不同栈帧中","chosen":false},{"text":"非静态局部变量可以和全局变量同名，是因为它们被分配在不同存储区","chosen":false},{"text":"因为非静态局部变量被分配在栈中，所以其作用域仅在过程体内","chosen":false}],"type":"choose"},{"queText":"以下有关缓冲区溢出以及缓冲区溢出攻击的叙述中，错误的是(  )。","answers":[{"text":"只要发生缓冲区溢出，CPU就会跳转到恶意程序事先设定好的程序去执行","chosen":true},{"text":"当传送到栈中局部数组中的字符的个数超过数组长度时发生缓冲区溢出","chosen":false},{"text":"恶意程序可利用像strcpy等无字符串长度设定的c库函数进行缓冲区溢出攻击","chosen":false},{"text":"只要发生缓冲区溢出，寄存器内容或变量或返回地址等程序信息就可能被修改","chosen":false}],"type":"choose"},{"queText":"假定全局short型数组a的起始地址为0x804908c，则a[2]的地址是(  )。","answers":[{"text":"0x8049092","chosen":false},{"text":"0x804908e","chosen":false},{"text":"0x8049094","chosen":false},{"text":"0x8049090","chosen":true}],"type":"choose"},{"queText":"IA-32中指令“ pushl %ebp\\"的功能是(  )","answers":[{"text":"M[R[esp]]←R[ebp], R[esp] ←R[esp]+4","chosen":false},{"text":"R[esp]←R[esp]+4, M[R[esp]] ←R[ebp]","chosen":false},{"text":"R[esp]←R[esp]-4, M[R[esp]] ←R[ebp]","chosen":true},{"text":"M[R[esp]]←R[ebp], R[esp] ←R[esp]-4","chosen":false}],"type":"choose"},{"queText":"假定全局数组a的声明为char *a[8], a的首地址为0x80498c0, i在ECX中，现要将a[i]取到EAX相应宽度的寄存器中，则所用的汇编指令是(  )。","answers":[{"text":"mov 0x80498c0(，%ecx), %ah","chosen":false},{"text":"mov (0x80498c0, %ecx, 4), %eax","chosen":false},{"text":"mov (0x80498c0, %ecx), %ah","chosen":false},{"text":"mov 0x80498c0(, %ecx, 4), %eax","chosen":true}],"type":"choose"},{"queText":"假设short型变量x被分配在寄存器AX中，若R[ax]=FF70H，则执行指令“salw $2, %ax”后，变量x的机器数和真值分别是(  )","answers":[{"text":"FDC0H, -576","chosen":true},{"text":"FDC3H，-573","chosen":false},{"text":"FFDCH, -36","chosen":false},{"text":"3FDC，16348","chosen":false}],"type":"choose"},{"queText":"以下关于IA-32中整数运算指令所支持的操作数的叙述中，错误的是(   )。","answers":[{"text":"对于乘除运算指令，操作数一定区 分是无符号整数还是带符号整数","chosen":false},{"text":"除乘法指令外，其他运算指令的源操作数和目的操作数的位数相等","chosen":true},{"text":"参加运算的操作数可以是一个字节(8b)、一个字(16b)或双字(32b)","chosen":false},{"text":"对于加减运算指令，操作数不区分是无符号整数还是带符号整数","chosen":false}],"type":"choose"},{"queText":"IA-32 中指令“movl  8(%ebp), %edx” 的功能是（）","answers":[{"text":"R[ebp]+8←R[edx]","chosen":false},{"text":"M[R[ebp]+8] ←R[edx]","chosen":false},{"text":"R[edx]←M[R[ebp]+8]","chosen":true},{"text":"R[edx]←R[ebp]+8","chosen":false}],"type":"choose"},{"queText":"假定全局数组a的声明为double *a[8]，a的首地址为0x80498c0，i在ECX中，现要将a[i]取到EAX相应宽度的寄存器中，则所用的汇编指令是(  )","answers":[{"text":"mov (0x80498c0, %ecx, 4), %eax","chosen":false},{"text":"mov 0x80498c0( ，%ecx, 8), %eax","chosen":false},{"text":"mov (0x80498c0, %ecx, 8), %eax","chosen":false},{"text":"mov 0x80498c0(, %ecx, 4), %eax","chosen":false}],"type":"choose"},{"queText":"以下有关IA-32的过程调用所使用的栈和栈帧的叙述中，错误的是(  )","answers":[{"text":"每进行一次过程调用，用户栈从高地址向低地址增长出二个栈帧","chosen":false},{"text":"从被调用过程返回调用过程之前，被调用过程会释放自己的栈帧","chosen":false},{"text":"过程嵌套调用深度越深，栈中栈帧个数越多，严重时会发生栈溢出","chosen":false},{"text":"只能通过将栈指针ESP作为基址寄存器来访问用户栈中的数据","chosen":true}],"type":"choose"},{"queText":"假定静态short型二维数组b的声明如下:static short b[2][4]={ {2, 9, -1, 5}, {3, 1, -6, 2 }};若b的首地址为0x8049820,则按行优先存储方式下，地址0x804982c中的内容是(  )。","answers":[{"text":"0xfa","chosen":true},{"text":"0xff","chosen":false},{"text":"0x00","chosen":false},{"text":"0x05","chosen":false}],"type":"choose"},{"queText":"某C语言程序中有以下两个变量声明:int a[10];int *ptr=&a[0];则ptr+i的值为(  )。","answers":[{"text":"&a[0]+i","chosen":true},{"text":"&a[0]+2xi","chosen":false},{"text":"&a[0]+4xi","chosen":false},{"text":"&a[0]+8xi","chosen":false}],"type":"choose"},{"queText":"程序P中有两个int类型变量i和j，被分别分配在寄存器EAX和EDX中，P中存在以下if语句:if (i<j) {    };\\n该if语句对应的指令序列一定不会是(  )","answers":[{"text":"cmpl %eax, %edxjle 804847c","chosen":true},{"text":"cmpl %edx, %eaxjl 8048460","chosen":false},{"text":"cmpl %eax, %edxjg 8048480","chosen":false},{"text":"cmpl %eax, %edxja 8048380","chosen":false}],"type":"choose"},{"queText":"程序P中有两个变量i和j，被分别分配在寄存器EAX和EDX中，P中语句“if(i<j) {    }”对应的指令序列如下(左边为指令地址，中间为机器代码，右边为汇编指令):804846a  39 c2   cmpl %eax, %edx804846c  7e 0d   jle  xxxxxxxxx若执行到804846a处的cmpl指令时，i=105, j=100,则jle指令执行后将会转到(  )处的指令执行。","answers":[{"text":"8048461","chosen":false},{"text":"804846e","chosen":false},{"text":"8048479","chosen":true},{"text":"804847b","chosen":false}],"type":"choose"},{"queText":"假定局部int型数组a的首地址在EDX中，i在ECX中，现要将a[i]取到EAX相应宽度的寄存器中，则所用的汇编指令是(  )","answers":[{"text":"mov (%edx, %ecx, 4), %eax","chosen":true},{"text":"mov (%edx, %ecx, 4), %ax","chosen":false},{"text":"mov (%edx, %ecx, 2), %eax","chosen":false},{"text":"mov (%edx, %ecx, 2), %ax","chosen":false}],"type":"choose"},{"queText":"以下有关IA-32/Linux的过程调用的叙述中，错误的是(  )","answers":[{"text":"在过程中通常先使用被调用者保存寄存器","chosen":true},{"text":"通常EBP寄存器指向对应栈帧(stack frame)的底部","chosen":false},{"text":"通常每个栈帧底部单元中存放其调用过程的EBP内容","chosen":false},{"text":"每个过程都有一个栈帧，其大小为16B的倍数","chosen":false}],"type":"choose"},{"queText":"以下有关递归过程调用的叙述中，错误的是(  )。","answers":[{"text":"递归过程第一个参数的有效地址为R[ebp]+8","chosen":false},{"text":"每次递归调用都会生成-个新的栈帧，因而空间开销大","chosen":false},{"text":"可能需要执行递归过程很多次，因而时间开销大","chosen":false},{"text":"每次递归调用在栈帧中保存的返回地址都不相同","chosen":true}],"type":"choose"},{"queText":"假定静态short型二维数组b的声明如下: static short b[2][4]={ {2, 9, -1，5}, {3，8, 2, -6}};若b的首地址为0x8049820,则按行优先存储方式下，数组元素“8” 的地址是(  )。","answers":[{"text":"0x8049828","chosen":false},{"text":"0x8049825","chosen":false},{"text":"0x8049824","chosen":false},{"text":"0x804982a","chosen":true}],"type":"choose"},{"queText":"假定int型数组a的首址在ECX中，则“a送EAX\\"所对应的汇编指令是(  )。","answers":[{"text":"leal (%ecx, 0), %eax","chosen":true},{"text":"movl %edx, %eax","chosen":false},{"text":"leal (%ecx, 4), %eax","chosen":false},{"text":"movl %ecx, %eax","chosen":false}],"type":"choose"},{"queText":"假设R[ax]=FFE8H, R[bx]=7FE6H,执行指令“ subw %bx, %ax\\"后，寄存器的内容和各标志的变化为(  )","answers":[{"text":"R[ax]=8002H, OF=0，SF=1, CF=0，ZF=0","chosen":false},{"text":"R[bx]=8002H, OF=0, SF=1, CF=0， ZF=0","chosen":false},{"text":"R[bx]=8002H, OF=1, SF=1, CF=0，ZF=0","chosen":true},{"text":"R[ax]=8002H, OF=1, SF=1, CF=0，ZF=0","chosen":false}],"type":"choose"},{"queText":"IA-32中指令“leal  8(%edx, %esi, 4), %edx\\"的功能是(  )","answers":[{"text":"R[edx]←R[edx]+R[esi]*4+8","chosen":true},{"text":"R[esi]+R[edx]*4+8←R[edx]","chosen":false},{"text":"R[edx]+R[esi]*4+8←R[edx]","chosen":false},{"text":"R[edx]←R[esi]+R[edx]*4+8","chosen":false}],"type":"choose"},{"queText":"假设R[ax]=FFE8H, R[bx]=7FE6H, 执行指令“ addw %bx, %ax\\"后，寄存器的内容和各标志的变化为(  )","answers":[{"text":"R[ax]=7FCEH，OF=1, SF=0, CF=0, ZF=0","chosen":true},{"text":"R[bx]=7FCEH，OF=0，SF=0，CF=1, ZF=0","chosen":false},{"text":"R[ax]=7FCEH, OF=0, SF=0, CF=1, ZF=0","chosen":false},{"text":"R[bx]=7FCEH, OF=1, SF=0, CF=0，ZF=0","chosen":false}],"type":"choose"},{"queText":"假定静态short 型二维数组b和指针数组pb的声明如下:static short b[2][4] ={ {2, 9, -1, 5}, {3, 1, -6, 2 }};static short *pb[2]={b[0], b[1]}若b的首地址为0x8049820,则&pb[1]的值是(  )。","answers":[{"text":"0x8049834","chosen":false},{"text":"0x8049832","chosen":false},{"text":"0x8049838","chosen":false},{"text":"0x8049830","chosen":true}],"type":"choose"},{"queText":"以下关于IA-32指令格式的叙述中，错误的是(  )","answers":[{"text":"指令中给出的操作数所在的通用寄存器的宽度总是32位","chosen":true},{"text":"采用变长指令字格式，指令长度从整个字节到十几个字节不等","chosen":false},{"text":"指令中指出的位移量和立即数的长度可以是0、1、2或4个字节","chosen":false},{"text":"采用变长操作码，操作码位数可能是5位到十几位不等","chosen":false}],"type":"choose"},{"queText":"以下关于各类控制转移指令的叙述中，错误的是(  )","answers":[{"text":"调用指令(CALL)和返回指令(RET)都是特殊的无条件转移指令","chosen":false},{"text":"条件转移指令(Jcc)的判断条件可用于整数之间和浮点数之间的大小比较","chosen":true},{"text":"条件转移指令(Jcc) 将根据EFLAGS寄存器中的标志信息进行条件判断","chosen":false},{"text":"无条件转移指令(JMP) 直接将转移目标地址送到EIP寄存器中","chosen":false}],"type":"choose"},{"queText":"4.指令集体系结构(ISA) 是计算机系统中必不可少的一个抽象层，它是对硬件的抽象，软件通过它所规定的指令系统规范来使用硬件。以下有关ISA的叙述中，错误的是(  )","answers":[{"text":"ISA规定了指令的操作数类型、寄存器结构、存储空间大小、编址方式和大端/小端方式","chosen":true},{"text":"ISA规定了指令获取操作数的方式，即寻址方式","chosen":false},{"text":"ISA规定了所有指令的集合，包括指令格式和操作类型","chosen":false},{"text":"ISA规定了执行每条指令时所包含的控制信号","chosen":false}],"type":"choose"},{"queText":"程序P中有两个unsigned类型变量i和j，被分别分配在寄存器EAX和EDX中，P中存在以下if语句: if (i<j) { … } ;该if语句对应的指令序列一定不会是(  )。","answers":[{"text":"cmpl %edx, %eax jb 8048460","chosen":false},{"text":"cmpl %eax, %edx ja 8048380","chosen":true},{"text":"cmpl %eax, %edx jae 8048480","chosen":false},{"text":"cmpl %eax, %edx Jbe  804847c","chosen":false}],"type":"choose"},{"queText":"以下关于IA-32的定点寄存器组织的叙述中，错误的是(  )。","answers":[{"text":"EIP/IP为指令指针寄存器，即PC; EFLAGS/FLAGS 为标志寄存器","chosen":false},{"text":"每个通用寄存器都可作为32位、16 位或8位寄存器使用","chosen":false},{"text":"寄存器ESP/SP称为栈指针寄存器, EBP/BP 称为基址指针寄存器","chosen":true},{"text":"寄存器EAX/AX/AL称为累加器，ECX/CX/CL称为计数寄存器","chosen":false}],"type":"choose"},{"queText":"假设P为调用过程，Q为被调用过程，程序在IA-32处理器上执行，以下有关过程调用的叙述中，错误的是(  )、","answers":[{"text":"从P跳转到Q执行应使用CALL指令","chosen":false},{"text":"从P传到Q的实参无需重新分配空间存放","chosen":true},{"text":"从Q跳回到P执行应使用RET指令","chosen":false},{"text":"C语言程序中的函数调用就是过程调用","chosen":false}],"type":"choose"},{"queText":"IA-32中指令“movl 8(%edx, %esi, 4), %edx\\"的功能是(  )","answers":[{"text":"R[edx]←M[R[edx]+R[esi]*4+8]","chosen":true},{"text":"M[R[edx]+R[esi]*4+8]← R[edx]","chosen":false},{"text":"R[edx]←M[R[esi]+R[edx]*4+8]","chosen":false},{"text":"M[R[esi]+R[edx]*4+8]←R[edx]","chosen":false}],"type":"choose"},{"queText":"假设R[eax]=FF000008H, R[ecx]=00001000H，执行指令“ testl %eax, %ecx”后，寄存器的内容和标志变为(  ) 。","answers":[{"text":"寄存器内容不变，OF=CF=SF=0, ZF=1","chosen":true},{"text":"R[ecx]=00000000H，OF=CF=SF=0，ZF=1","chosen":false},{"text":"R[eax]=00000000H，OF=CF=SF=0, ZF=1","chosen":false},{"text":"R[ecx]=0000000H，标志不变","chosen":false}],"type":"choose"},{"queText":"假定局部数组a的声明为int a[4)={0,-1, 300, 20}，a的首地址为R[ebp]-16,则在地址R[ebp]- 4处存放的是(  )。","answers":[{"text":"0","chosen":false},{"text":"20","chosen":true},{"text":"300","chosen":false},{"text":"-1","chosen":false}],"type":"choose"},{"queText":"以下关于1A-32处理器对齐方式的叙述中，错误的是(  )。","answers":[{"text":"不同操作系统采用的对齐策略可能不同","chosen":false},{"text":"对于同-一个struct型变量，在不同对齐方式下可能会占用不同大小的存储区","chosen":false},{"text":"可以用编译指导语句(如tpragma pack)设置对齐方式","chosen":false},{"text":"总是按其数据宽度进行对齐，例如double型变量的地址总是8的倍数","chosen":true}],"type":"choose"},{"queText":"以下关于 IA-32指令寻址方式的叙述中，错误的是(  )。","answers":[{"text":"存储器操作数中最复杂的寻址方式是“ 基址加比例变址加位移”","chosen":false},{"text":"操作数可以是指令中的立即数，也可以是通用寄存器或存储单元中的内容","chosen":false},{"text":"对于寄存器操作数，必须在指令中给出通用寄存器的3位编号","chosen":false},{"text":"相对寻址的目标地址为“PC 内容加位移”，PC内容指当前正在执行指令的地址","chosen":true}],"type":"choose"},{"queText":"假定全局double型数组a的起始地址为0x804908c，则a[i]的地址是(  )","answers":[{"text":"0x804908c+2*i","chosen":false},{"text":"0x804908c+8*i","chosen":true},{"text":"0x804908c+i","chosen":false},{"text":"0x804908c+4* i","chosen":false}],"type":"choose"},{"queText":"假设P为调用过程，Q为被调用过程，程序在IA-32处理器上执行，以下是C语言程序中过程调用所涉及的操作:①过程Q保存P的现场，并为非静态局部变量分配空间②过程P将实参存放到Q能访问到的地方③过程P将返回地址存放到特定处，并跳转到Q执行④过程Q取出返回地址，并跳转回到过程P执行⑤过程Q恢复P的现场，并释放局部变量所占空间⑥执行过程Q的函数体过程调用的正确执行步骤是(  )","answers":[{"text":"②→③→④→①→⑤→⑥","chosen":false},{"text":"②→③→①→④→⑥→⑤","chosen":false},{"text":"②→③→①→⑥→⑤→④","chosen":true},{"text":"②→③→①→⑤→⑥→④","chosen":false}],"type":"choose"},{"queText":"假定int型数组a的首址在 ECX中，i在EDX中， 则“&a[i]-a 送EAX\\"所对应的汇编指令是(  )。","answers":[{"text":"leal ( ,%edx, 4), %eax","chosen":true},{"text":"leal ( ,%ecx, 4), %eax","chosen":false},{"text":"movl %ecx, %eax","chosen":false},{"text":"movl %edx, %eax","chosen":false}],"type":"choose"},{"queText":"以下选项中，不属于指令集体系结构名称的是(  )","answers":[{"text":"ARM","chosen":false},{"text":"MIPS","chosen":false},{"text":"UNIX","chosen":true},{"text":"IA-32","chosen":false}],"type":"choose"},{"queText":"以下关于循环结构语句的机器级代码表示的叙述中，错误的是(  )。","answers":[{"text":"不一定包含无条件转移指令","chosen":false},{"text":"循环体内执行的指令不包含条件转移指令","chosen":true},{"text":"一定至少包含-一 条条件转移指令","chosen":false},{"text":"循环结束条件通常用一条比较指令CMP来实现","chosen":false}],"type":"choose"},{"queText":"IA-32中指令“popl %ebp\\"的功能是(  )。","answers":[{"text":"R[esp]←R[esp]+4, R[ebp] ←M[R[esp]]","chosen":false},{"text":"R[ebp]←M[R[esp]], R[esp] ←R[esp]+4","chosen":true},{"text":"R[esp]←R[esp]-4, R[ebp] ←M[R[esp]]","chosen":false},{"text":"R[ebp]←M[R[esp]], R[esp] ←R[esp]-4","chosen":false}],"type":"choose"},{"queText":"以下关于switch语句的机器级代码表示的叙述中，错误的是(  )。","answers":[{"text":"当case中出现的条件取值范围较小时，可以用跳转表的方式实现","chosen":false},{"text":"每个case至少对应一条条件转移指令，因而一定会包含多条条件转移指令","chosen":false},{"text":"每个case对应的一段代码结束后，都会有一条无条件转移指令","chosen":false},{"text":"可以用连续的if ~ else ~ if ~ else ~ if…..语句对应的机器代码来实现switch语句","chosen":true}],"type":"choose"},{"queText":"假定int型数组a的首址在ECX中，i在EDX中，则“*(a+i)送EAX\\"所对应的汇编指令是(  )。","answers":[{"text":"leal (%edx, %ecx, 4), %eax","chosen":false},{"text":"leal (%ecx, %edx, 4)，%eax","chosen":false},{"text":"movl (%ecx, %edx, 4), %eax","chosen":true},{"text":"movl (%edx, %ecx, 4), %eax","chosen":false}],"type":"choose"},{"queText":"以下有关IA-32的过程调用方式的叙述中，错误的是(  )。","answers":[{"text":"入口参数使用栈(stack)传递，即所传递的实参被分配在栈中","chosen":false},{"text":"返回地址是CALL指令下一条指令的地址，被保存在栈中","chosen":false},{"text":"EBX、ESI、 EDI、 EBP和ESP都是被调用者保存寄存器","chosen":true},{"text":"EAX、ECX和EDX都是调用者保存寄存器","chosen":false}],"type":"choose"}]}
    `;
    let bbRecordObj = JSON.parse(bbRecordObjNoScoreStr);


    // bbRecordObj =
    //     {
    //         title: "title",
    //         description: "description",
    //         questions:
    //             [
    //                 {
    //                     queText: "queText",
    //                     scoreStr: "1:1",
    //                     type: "choose",
    //                     answers:
    //                         [
    //                             {
    //                                 text: "ans",
    //                                 choose: true
    //                             }
    //                         ]
    //                 }
    //             ]
    //     };
    var request = Database.db.transaction(['bbRecordObj'], 'readwrite')
        .objectStore('bbRecordObj')
        .add({id: 1, content: bbRecordObj});

    request.onsuccess = function (event) {
        console.log('数据写入成功');
    };

    request.onerror = function (event) {
        console.log('数据写入失败');
        console.log(event.target.error);
    }
}
function read() {
    var transaction = Database.db.transaction(['bbRecordObj']);
    var objectStore = transaction.objectStore('bbRecordObj');
    var request = objectStore.get(1);

    request.onerror = function (event) {
        console.log('事务失败');
    };

    request.onsuccess = function (event) {
        if (request.result) {
            console.log(request.result);
            // console.log('Name: ' + request.result.name);
            // console.log('Age: ' + request.result.age);
            // console.log('Email: ' + request.result.email);
        } else {
            console.log('未获得数据记录');
        }
    };
}


// openDB("bb",2);
// openDB("huhu");
// 为什么我要open不一样的名字的 才能有反应呢
// 为什么 不能用bb 这个名字
// console.log( Database);

