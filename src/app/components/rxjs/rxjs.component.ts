import { Component, OnInit } from '@angular/core';
import { Observable, Observer, fromEvent, Subscriber, of, from, empty, never, interval, timer } from 'rxjs';
// tslint:disable-next-line: max-line-length
import { take, first, takeLast, last, takeUntil, skip, startWith, concat, concatAll, map, switchAll, merge, mergeAll, delayWhen, delay, debounceTime, throttleTime, zip, distinct } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss']
})
export class RxjsComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    // this.testObserable();
    // this.testOf();
    // this.testFrom();
    // this.testFromEvent();
    // this.testEmpty();
    // this.testNever();
    // this.testInterval();
    // this.testTimer();
    // this.testSelector();
    // this.testTakeUntil();
    // this.testStartWith();
    // this.testConcat();
    // this.testMerage();
    // this.testDelay();
    // this.testDebounceTime();
    // this.testThrottleTime();
  }

  // 测试Observable，subscribe为同步执行
  testObserable() {
    console.log('start');
    const observable: Observable<string> = new Observable((observer: Subscriber<string>) => {
      observer.next('a');
      // observer.unsubscribe();
      // observer.complete();
      observer.next('b');
    });
    observable.subscribe(res => {
      console.log(res);
    });
    console.log('end');
  }

  /**
   * 创建observable类
   */

  // of类似于一个迭代器，将参数迭代然后发出
  testOf() {
    const observable: Observable<string> = of('a', 'b', 'c');
    observable.subscribe(res => {
      console.log('value:', res);
    });
  }

  // from的参数必须是一个类数组（set,iterator等），其他和of一样
  testFrom() {
    const observable: Observable<string | number> = from(['a', 'b', 2019]);
    observable.subscribe(res => {
      console.log(res);
    });
  }

  // 将一个元素上的事件转化为一个Observable
  testFromEvent() {
    const observable: Observable<Event> = fromEvent(document.body, 'click');
    observable.subscribe(res => {
      console.log(res);
    });
  }

  // 返回一个空的observable，如果订阅会立即执行complete函数
  testEmpty() {
    const observable: Observable<never> = empty();
    observable.subscribe({
      next: () => {},
      error: () => {},
      complete: () => {
        console.log('complete');
      }
    });
  }

  // 數學上還有一個跟零(0)很像的數，那就是無窮(∞)，在 Observable 的世界裡我們用 never 來建立無窮的 observablenever
  // 會給我們一個無窮的 observable，如果我們訂閱它又會發生什麼事呢？...什麼事都不會發生，它就是一個一直存在但卻什麼都不做的
  //  observable。
  testNever() {
    const observable: Observable<never> = never();
    observable.subscribe({
      next: value => {
        console.log(value);
      },
      error: error => {
        console.log(error);
      },
      complete: () => {
        console.log('complete');
      }
    });
  }

  // 几秒钟发射一个值
  testInterval() {
    const observable: Observable<number> = interval(1000);
    observable.subscribe(res => {
      console.log(res);
    });
  }

  // timer有两个参数，第一个参数表示到发送第一个值的间隔时间，第二个参数表示从发送第二个参数开始，没发送一个值的间隔时间，
  // 如果第二个参数为空则发送第一个参数后，终止，执行complete函数
  testTimer() {
    const observable: Observable<number> = timer(1000, 2000);
    observable.subscribe(res => {
      console.log(res);
    });
  }

  /**
   * 选择器类
   */

  // first 取第一个数然后结束，和take(1)效果一样
  // take 取前几个
  // takeLast 和take用法一样，区别是该方法是取后边几个值
  // last是take Last（1）的简写，目的是取最后一个值
  // skip 跳过前几个
  testSelector() {
    const observable: Observable<number> = interval(1000).pipe(
      // skip(5),
      take(5)
      // takeLast(3),
      // first(),
      // last()
    );
    observable.subscribe({
      next: value => {
        console.log(value);
      },
      error: error => {
        console.log(error);
      },
      complete: () => {
        console.log('complete');
      }
    });
  }

  /**
   * 控制数据流额类
   */

  // takeUntil 参数为一个Observable,当参数Observable订阅发生，终止takeUntil绑定的observable
  testTakeUntil() {
    const clickObservable: Observable<Event> = fromEvent(document.body, 'click');
    const observable: Observable<number> = interval(1000);
    observable.pipe(takeUntil(clickObservable)).subscribe(res => {
      console.log(res);
    });
  }

  // startWith, 塞一个初始值给observable
  testStartWith() {
    const observable: Observable<number> = of(1, 2, 3);
    observable.pipe(startWith(0)).subscribe(res => {
      console.log(res);
    });
  }

  // concat 将多个observable串接起来前一个完成好了，再执行下一个
  // merge 使用方式和concat一样，区别就是merge处理的Observable是异步执行的，没有先后顺序
  testConcat() {
    const source1 = timer(500, 2000).pipe(take(3));
    const source2 = of(3, 4, 5);
    const source3 = from([6, 7, 8]);
    // source1.pipe(concat(source2, source3)).subscribe(res => {
    //   console.log(res);
    // });
    source1.pipe(merge(source2, source3)).subscribe(res => {
      console.log(res);
    });
  }

  // concatAll, switchAll, merageALl
  testMerage() {
    const example = fromEvent(document.body, 'click').pipe(
      // map 把送出的event事件转换为 Observable
      // 每次点击送出一个新的 Observable
      map(e => {
        // console.log(e);
        // 生成新的 Observable，点击一次输出0，1，2
        return interval(1000).pipe(take(5));
      }),

      // concatAll 比如快速点击三次，会按顺序输出三次0,1,2
      // switchAll 快速点击，只输出一次0,1,2，也就是说老的舍去只保留最新的
      // mergeAll 快速点击，会重复的输出多次0，1等。点击越多下，最后送出的频率就会越快。不会舍去，每次都会输出
      // switchAll()
      concatAll()
      // mergeAll()
    );

    example.subscribe({
      next: value => {
        console.log(value);
      },
      error: err => {
        console.log('Error: ' + err);
      },
      complete: () => {
        console.log('complete');
      }
    });
  }

  // delay, delayWhen和delay不同，他的延迟时间由参数函数决定，并且会将主订阅对象发出的值作为 参数：
  testDelay() {
    const observable = interval(1000).pipe(take(5));
    observable
      .pipe(
        delayWhen(x => {
          return empty().pipe(delay(x * x * 100));
        })
      )
      .subscribe(res => {
        console.log(res);
      });
  }

  // debounceTime
  // debounce 在每次收到元素，他会先把元素 cache 住并等待一段时间，如果這段時間內已經沒有收到任何元素，則把元素送出；
  // 如果這段時間內又收到新的元素，則會把原本 cache 住的元素釋放掉並重新計時，不斷反覆。
  testDebounceTime() {
    const observable = interval(500).pipe(
      take(10),
      debounceTime(1000)
    );
    observable.subscribe(res => {
      console.log(res);
    });
  }

  // throttleTime
  // 跟 debounce 的不同是 throttle 會先開放送出元素，等到有元素被送出就會沈默一段時間，等到時間過了又會继续发送元素,防止某个事件频繁触发，影响效率
  testThrottleTime() {
    const observable = fromEvent(document.body, 'click');
    observable.pipe(throttleTime(1000)).subscribe(res => {
      console.log(res);
    });
  }

  // distinct会和已经拿到的数据比较过滤掉
  // distinct第一个参数是个函数，函数返回值就是distinct比较的值
  // 但是distinct底层是创建一个set来辅助去重，如果数据很大，可能导致set过大，这个时候就需要设置distinct第二个参数来刷新set，
  // 第二个 参数是个observable到发起订阅的时候就会清空set
  // distinctUntilChanged与distinct不同之处就是，distinctUntilChanged只会比较相邻两次输入
  testDistinct() {
    // tslint:disable-next-line: max-line-length
    const source = from([{ value: 'a' }, { value: 'b' }, { value: 'c' }, { value: 'a' }, { value: 'c' }]).pipe(zip(interval(300), (x, y) => x));
    const example = source.pipe(
      distinct(x => {
        return x.value;
      })
    );

    example.subscribe({
      next: value => {
        console.log(value);
      },
      error: err => {
        console.log('Error: ' + err);
      },
      complete: () => {
        console.log('complete');
      }
    });
  }

  /**
   * 协调多个observable类
   */
}
