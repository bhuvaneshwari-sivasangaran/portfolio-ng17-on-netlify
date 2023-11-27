import { Inject, Component, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { NgChartsModule } from 'ng2-charts';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NgChartsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  public isBrowser: boolean = false;

  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: [ 'Language / Library' ],
    datasets: [
      { data: [ 4.5 ], label: 'JavaScript', backgroundColor: '#6495ED', },
      { data: [ 5 ], label: 'HTML5', backgroundColor: '#03849D' },
      { data: [ 4.5 ], label: 'CSS3', backgroundColor: '#004878' },
      { data: [ 4.5 ], label: 'Typescript', backgroundColor: '#1338BE'},
      { data: [ 5 ], label: 'REST', backgroundColor: '#2093C3'},
      { data: [ 3.5 ], label: 'Java', backgroundColor: '#38ACEC'},
      { data: [ 4.5 ], label: 'Angular', backgroundColor: '#4273A4'},
      { data: [ 3.5 ], label: 'React', backgroundColor: '#1F456E'},
      { data: [ 5 ], label: 'JSON', backgroundColor: '#1569C7'},
    ]
  };

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: false,
    font: {
      family: "'Comic Sans MS', cursive"
    }
  };

  public radarChartOptions: ChartConfiguration<'radar'>['options'] = {
    responsive: false,
  };
  public radarChartLabels: string[] = ['Networking', 'Communication', 'Listening', 'Teamwork', 'Flexibility', 'Understanding Others', 'Problem Solving'];

  public radarChartDatasets: ChartConfiguration<'radar'>['data']['datasets'] = [
    { data: [ 3, 2, 4, 1, 5, 6, 7], label: 'Behavior Analysis', backgroundColor: '#38ACEC', borderColor: '#1F456E', pointBackgroundColor: '#004878', pointBorderColor: '#1569C7', pointBorderWidth: 2 },
  ];

  public pieChartOptions: ChartConfiguration<'pie'>['options'] = {
    responsive: false,
  };
  public pieChartLabels: string[] = [ 'Bachelors in IT (June 2015 - May 2019)', 'Project Trainee at ZOHO (Dec 2018 - July 2019)', 'Software Engineer at Prodapt (Sep 2019 - Mar 2022)', 'Senior Software Engineer at Prodapt (Apr 2022 - Nov 2022)', 'Post Graduate at Conestoga College (Jan 2023 - Apr 2024)' ];
  public pieChartDatasets : ChartConfiguration<'pie'>['data']['datasets'] = [ {
    data: [ 4, 0.65, 2.5, 0.65, 1.35 ], backgroundColor: [ '#6495ED', '#03849D', '#004878', '#1338BE', '#2093C3' ]
  } ];
  public pieChartLegend = true;
  public pieChartPlugins = [];

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  changeMode() {
    let main = document.getElementsByTagName('body')[0];
    let color_mode_button = document.getElementsByClassName('color-mode-button')[0].children[0].classList;
    if (main.classList.contains('dark')) {
      main.classList.remove('dark');
      color_mode_button.remove('fa-sun');
      color_mode_button.add('fa-moon'); 
      document.getElementsByTagName('source')[0].srcset = '/assets/image.webp'
      document.getElementsByTagName('img')[0].src = '/assets/image.png'
    } else {
      main.classList.add('dark');
      color_mode_button.remove('fa-moon');
      color_mode_button.add('fa-sun'); 
      document.getElementsByTagName('source')[0].srcset = '/assets/image-dark.webp'
      document.getElementsByTagName('img')[0].src = '/assets/image-dark.png'
    }
  }

}
