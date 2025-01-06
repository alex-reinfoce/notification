import { Injectable } from '@nestjs/common';
import { SlackDto } from './dto/slack.dto';

@Injectable()
export class NotificationService {
  slack(dto: SlackDto) {
    if (dto.event === 'entry.create' && dto.uid === 'api::log.log') {
      fetch('https://hooks.slack.com/services/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', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          text: `${dto.entry.content}`,
        }),
      })
        .then((res) => res.text())
        .catch((err) => {
          console.error(err);
        });
    }
    return 'This action adds a new notification';
  }
}
