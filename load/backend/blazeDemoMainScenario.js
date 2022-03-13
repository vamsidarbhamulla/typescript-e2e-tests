import { sleep, group } from 'k6';
import http from 'k6/http';

export function selectDestinationAndFlight() {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  let response;

  group('page_1 - https://blazedemo.com/', () => {
    response = http.get('https://blazedemo.com/', {
      headers: {
        'cache-control': 'max-age=0',
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="99", "Google Chrome";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
        'upgrade-insecure-requests': '1',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36',
        accept:
          'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
        'sec-fetch-site': 'none',
        'sec-fetch-mode': 'navigate',
        'sec-fetch-user': '?1',
        'sec-fetch-dest': 'document',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'en-US,en;q=0.9'
      }
    });
    response = http.get('https://blazedemo.com/assets/bootstrap.min.js', {
      headers: {
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="99", "Google Chrome";v="99"',
        Referer: 'https://blazedemo.com/',
        'sec-ch-ua-mobile': '?0',
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36',
        'sec-ch-ua-platform': '"macOS"'
      }
    });
    response = http.get('https://blazedemo.com/assets/bootstrap-table.js', {
      headers: {
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="99", "Google Chrome";v="99"',
        Referer: 'https://blazedemo.com/',
        'sec-ch-ua-mobile': '?0',
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36',
        'sec-ch-ua-platform': '"macOS"'
      }
    });
    response = http.get('https://blazedemo.com/assets/bootstrap.min.css', {
      headers: {
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="99", "Google Chrome";v="99"',
        Referer: 'https://blazedemo.com/',
        'sec-ch-ua-mobile': '?0',
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36',
        'sec-ch-ua-platform': '"macOS"'
      }
    });
    response = http.get('https://blazedemo.com/assets/bootstrap-table.css', {
      headers: {
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="99", "Google Chrome";v="99"',
        Referer: 'https://blazedemo.com/',
        'sec-ch-ua-mobile': '?0',
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36',
        'sec-ch-ua-platform': '"macOS"'
      }
    });
    response = http.get('https://blazedemo.com/favicon.ico');
  });

  group('page_2 - https://blazedemo.com/reserve.php', () => {
    response = http.post(
      'https://blazedemo.com/reserve.php',
      {
        fromPort: 'San+Diego',
        toPort: 'Berlin'
      },
      {
        headers: {
          'cache-control': 'max-age=0',
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="99", "Google Chrome";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'upgrade-insecure-requests': '1',
          origin: 'https://blazedemo.com',
          'content-type': 'application/x-www-form-urlencoded',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36',
          accept:
            'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
          'sec-fetch-site': 'same-origin',
          'sec-fetch-mode': 'navigate',
          'sec-fetch-user': '?1',
          'sec-fetch-dest': 'document',
          referer: 'https://blazedemo.com/',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-US,en;q=0.9'
        }
      }
    );

    response = http.get('https://blazedemo.com/assets/bootstrap.min.js', {
      headers: {
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="99", "Google Chrome";v="99"',
        Referer: 'https://blazedemo.com/reserve.php',
        'sec-ch-ua-mobile': '?0',
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36',
        'sec-ch-ua-platform': '"macOS"'
      }
    });

    response = http.get('https://blazedemo.com/assets/bootstrap-table.js', {
      headers: {
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="99", "Google Chrome";v="99"',
        Referer: 'https://blazedemo.com/reserve.php',
        'sec-ch-ua-mobile': '?0',
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36',
        'sec-ch-ua-platform': '"macOS"'
      }
    });

    response = http.get('https://blazedemo.com/assets/bootstrap.min.css', {
      headers: {
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="99", "Google Chrome";v="99"',
        Referer: 'https://blazedemo.com/reserve.php',
        'sec-ch-ua-mobile': '?0',
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36',
        'sec-ch-ua-platform': '"macOS"'
      }
    });

    response = http.get('https://blazedemo.com/assets/bootstrap-table.css', {
      headers: {
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="99", "Google Chrome";v="99"',
        Referer: 'https://blazedemo.com/reserve.php',
        'sec-ch-ua-mobile': '?0',
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36',
        'sec-ch-ua-platform': '"macOS"'
      }
    });

    response = http.get('https://blazedemo.com/favicon.ico');
  });

  group('page_3 - https://blazedemo.com/purchase.php', () => {
    response = http.post(
      'https://blazedemo.com/purchase.php',
      {
        flight: '4346',
        price: '233.98',
        airline: 'Lufthansa',
        fromPort: 'San+Diego',
        toPort: 'Berlin'
      },
      {
        headers: {
          'cache-control': 'max-age=0',
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="99", "Google Chrome";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'upgrade-insecure-requests': '1',
          origin: 'https://blazedemo.com',
          'content-type': 'application/x-www-form-urlencoded',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36',
          accept:
            'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
          'sec-fetch-site': 'same-origin',
          'sec-fetch-mode': 'navigate',
          'sec-fetch-user': '?1',
          'sec-fetch-dest': 'document',
          referer: 'https://blazedemo.com/reserve.php',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-US,en;q=0.9'
        }
      }
    );

    response = http.get('https://blazedemo.com/assets/bootstrap.min.js', {
      headers: {
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="99", "Google Chrome";v="99"',
        Referer: 'https://blazedemo.com/purchase.php',
        'sec-ch-ua-mobile': '?0',
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36',
        'sec-ch-ua-platform': '"macOS"'
      }
    });

    response = http.get('https://blazedemo.com/assets/bootstrap-table.js', {
      headers: {
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="99", "Google Chrome";v="99"',
        Referer: 'https://blazedemo.com/purchase.php',
        'sec-ch-ua-mobile': '?0',
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36',
        'sec-ch-ua-platform': '"macOS"'
      }
    });

    response = http.get('https://blazedemo.com/assets/bootstrap.min.css', {
      headers: {
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="99", "Google Chrome";v="99"',
        Referer: 'https://blazedemo.com/purchase.php',
        'sec-ch-ua-mobile': '?0',
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36',
        'sec-ch-ua-platform': '"macOS"'
      }
    });

    response = http.get('https://blazedemo.com/assets/bootstrap-table.css', {
      headers: {
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="99", "Google Chrome";v="99"',
        Referer: 'https://blazedemo.com/purchase.php',
        'sec-ch-ua-mobile': '?0',
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36',
        'sec-ch-ua-platform': '"macOS"'
      }
    });

    response = http.get('https://blazedemo.com/favicon.ico');
  });

  // sleep
  sleep(1);
}
