import { Injectable } from '@nestjs/common';
import { SlackDto } from './dto/slack.dto';
import { ConfigService } from '@nestjs/config';
import  dayjs from 'dayjs';

@Injectable()
export class NotificationService {
  constructor(private readonly configService: ConfigService) {}
  private readonly slackWebhookUrl = this.configService.get('SLACK_WEBHOOK_URL');

  slack(dto: SlackDto) {
    if (dto.event === 'entry.create' && dto.uid === 'api::log.log' && dto.entry.level === 'error') {
      fetch(this.slackWebhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          text: `*🚨 错误通知*\n
>*项目名称*: \`${dto.entry.projectName}\`
>*报错内容*: \`\`\`${dto.entry.content}\`\`\`
>*报错时间*: \`${dayjs(dto.entry.createdAt).format('YYYY-MM-DD HH:mm:ss')}\``,
        }),
      })
        .then((res) => res.text())
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.error(err);
        });
    }
    return 'This action adds a new notification';
  }
}
