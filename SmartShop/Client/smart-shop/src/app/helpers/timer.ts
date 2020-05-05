export class Timer {

  public static async delay(ms: number) {
    return await new Promise(resolve => setTimeout(resolve, ms));
  }

}
