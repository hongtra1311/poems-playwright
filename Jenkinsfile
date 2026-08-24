pipeline {
    agent any

    options {
        timeout(time: 30, unit: 'MINUTES')
    }

    stages {
        stage('Install deps') {
            steps {
                bat 'npm ci'
            }
        }

        stage('Install browsers') {
            steps {
                bat 'npx playwright install chromium'
            }
        }

        stage('Run tests (parallel workers)') {
            steps {
                bat 'npx playwright test --workers=4'
            }
        }
    }

    post {
        always {
            publishHTML(target: [
                allowMissing: true,
                alwaysLinkToLastBuild: true,
                keepAll: true,
                reportDir: 'playwright-report',
                reportFiles: 'index.html',
                reportName: 'Playwright Report'
            ])
            archiveArtifacts artifacts: 'test-results/**', allowEmptyArchive: true
        }
    }
}